import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { projects } from "./ProjectsPage";
import "./SkillsPage.css";

// mock Projects list for filter-existence check
const projectList = projects;

const skillsData = [
  { category: "Programming",   color: "#7a6cff",   skills: ["Python", "Java", "C++", "C", "C#", "JavaScript", "TypeScript", "HTML", "CSS", "Apex", "SOQL", "SOSL"] },
  { category: "Frameworks",    color: "#36c1be",   skills: ["React.js", "AngularJS", "Next.js", "Spring Boot", "Redux", "Tailwind CSS", "Machine Learning", "REST APIs", "GraphQL", "WebSockets", "Swagger"] },
  { category: "Tools/Others",  color: "#ffa252",   skills: ["Docker", "Azure DevOps", "CI/CD pipelines", "AWS S3", "Git", "Postman", "Linux", "MySQL", "MongoDB", "Redis", "Salesforce Workbench", "ServiceNow"] },
];

// 3D-sphere coords with 45° X-tilt
function getSphereCoords(num, radius, phiOffset=0, tiltX=Math.PI/4) {
  const coords = [];
  const golden = Math.PI*(3-Math.sqrt(5));
  for (let i=0;i<num;i++){
    const y = 1-(i/(num-1))*2;
    const rY = Math.sqrt(1-y*y);
    const θ = golden*i + phiOffset;
    let x = Math.cos(θ)*rY, z = Math.sin(θ)*rY;
    let yP = y*Math.cos(tiltX)-z*Math.sin(tiltX);
    let zP = y*Math.sin(tiltX)+z*Math.cos(tiltX);
    coords.push({ x:x*radius, y:yP*radius, z:zP*radius });
  }
  return coords;
}
function rotateY({x,y,z}, a){
  return { x:x*Math.cos(a)-z*Math.sin(a), y, z:x*Math.sin(a)+z*Math.cos(a) };
}

export default function SkillsPage({ navProps }) {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // small = phone OR tablet (≤1100px)
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 1100);
  useEffect(()=>{
    const onResize = ()=> setIsSmall(window.innerWidth <= 1100);
    window.addEventListener("resize", onResize);
    return ()=> window.removeEventListener("resize", onResize);
  },[]);

  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const [rotY, setRotY]         = useState([0,0,0]);
  const [noMatchSkill, setNo]   = useState("");
  const navigate                 = useNavigate();
  const animRef                  = useRef();

  // 3D rotation loop (pause on hover)
  useEffect(()=>{
    let running = true;
    function tick(){
      setRotY(([a,b,c])=>[
        hoveredIdx===0? a : a+0.018,
        hoveredIdx===1? b : b+0.021,
        hoveredIdx===2? c : c+0.016,
      ]);
      if(running) animRef.current = requestAnimationFrame(tick);
    }
    animRef.current = requestAnimationFrame(tick);
    return ()=>{ running=false; cancelAnimationFrame(animRef.current); };
  },[hoveredIdx]);

  // clear “no match” after 3s
  useEffect(()=>{
    if(!noMatchSkill) return;
    const t = setTimeout(()=> setNo(""), 3000);
    return ()=> clearTimeout(t);
  },[noMatchSkill]);

  const handleSkill = (skill)=>{
    setNo("");
    const found = projectList.some(p=>p.skills.includes(skill));
    if(found) navigate("/projects",{ state:{ filterSkill:skill } });
    else      setNo(skill);
  };

  return (
    <div className="App">
      <Navbar {...navProps}/>
      <div className="main-vertical-container">
        <div className="skills3-page-container large">
          <h1 className="skills3-title">Skills</h1>
          <p className="skills3-instruct">
            <span role="img" aria-label="info">💡</span> Click on any skill to instantly see my relevant projects!
          </p>
          {noMatchSkill && (
            <div className="skills-no-match">
              No projects match “{noMatchSkill}.” Please choose another skill.
            </div>
          )}
          <div className="skills3-cat-grid large">
            {skillsData.map((cat,idx)=>{
              const coords3d  = getSphereCoords(cat.skills.length,170,0.7*idx,Math.PI/4);
              const projected = coords3d.map(pt=>rotateY(pt,rotY[idx]));
              const showCard  = isSmall || hoveredIdx===idx;

              return (
                <div key={cat.category}
                  className={`skills3-cat-col${showCard?" hovered":""}`}
                  style={{"--cat-color":cat.color,zIndex:showCard?2:1}}
                  tabIndex={0}
                  onMouseEnter={()=>!isSmall&&setHoveredIdx(idx)}
                  onMouseLeave={()=>!isSmall&&setHoveredIdx(-1)}
                  onFocus={()=>{!isSmall&&setHoveredIdx(idx); setNo("")}}
                  onBlur={()=>!isSmall&&setHoveredIdx(-1)}
                >
                  <div className={`skills3-cat-area large${showCard?" carded":""}`}>
                    <h2 className="skills3-cat-title">{cat.category}</h2>

                    {showCard
                      ? <div className="skills3-chip-wrap">
                          {cat.skills.map((s,j)=>(
                            <button key={s}
                              className="skills3-chip"
                              style={{"--chip-ani":`${0.13*j+0.1}s`}}
                              onMouseDown={e=>{e.preventDefault(); handleSkill(s)}}
                              onKeyDown={e=>e.key==="Enter"&&handleSkill(s)}
                            >{s}</button>
                          ))}
                        </div>

                      : <div className="skills3-floatcloud globe3d large">
                          {cat.skills.map((s,i)=>{
                            const {x,y,z} = projected[i];
                            const left     = 50 + x/3.1;
                            const top      = 50 + y/3.1;
                            const scale    = 0.95 + (z+170)/350;
                            const opacity  = 0.56 + 0.44*((z+170)/340);
                            return (
                              <span key={s}
                                className="skills3-floatskill"
                                style={{
                                  left:`${left}%`, top:`${top}%`,
                                  transform:`translate(-50%,-50%) scale(${scale})`,
                                  opacity, color:cat.color,
                                  zIndex:Math.round(scale*100),
                                  filter:z<0? "blur(1.4px)" : "none"
                                }}
                              >{s}</span>
                            );
                          })}
                        </div>
                    }

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
