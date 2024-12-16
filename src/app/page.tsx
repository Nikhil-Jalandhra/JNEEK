import "./page.css";
import project from "@/../database/projects.js";
import { GoRepo } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import ToolTip from "./components/(toolTip)/ToolTip";

export default function Home() {  

  return (
    <div>
      <div className="overviewAbout">
        <p>
        As a fresher seeking my first role as a front-end developer, I bring creativity, passion, and a strong work ethic to the
        table. I specialize in responsive design, amazing UI/UX experiences, and intricate animations. Proficient in HTML, CSS, and React,
        with skills in GitHub/Git, Tailwind CSS, and Framer Motion. I am eager to contribute to innovative projects and grow
        professionally in web development.
        </p>
        <p>
        As a fresher seeking my first role as a front-end developer, I bring creativity, passion, and a strong work ethic to the
        table. I specialize in responsive design, amazing UI/UX experiences, and intricate animations. Proficient in HTML, CSS, and React,
        with skills in GitHub/Git, Tailwind CSS, and Framer Motion. I am eager to contribute to innovative projects and grow
        professionally in web development.
        </p>
      </div>
      <h1 className="overviewHeading">Projects</h1>
      <div className="overviewProjects">
        {project.map((item, index)=> (
          <div key={index} className="pinnedProjects">
          <h1>
            <span>
              <GoRepo/>
            </span>
            <Link className="blueLink toolTipParent" target="blank" href={item.link}>
              {item.name}
            <ToolTip children={item.name}/>
            </Link>
              <p className="publicTag">Public</p>
          </h1>
          <p className="pinnedProjectsDetails">{item.description}</p>
          <div className="pinnedProjectsMinor">
              <div className="langColor" style={{backgroundColor: `var(--${item.lang})`}}></div><p>{item.lang}</p>
              <div className="pinnedProjectStar"><FaRegStar/></div><p>{item.star}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="overviewDetailsContainer">
        <div className="overviewSectionFirst">
          <h1>600 contributions in the last year</h1>
          <div className="overviewDetails">
            <img className="overviewDays" src="./gitdays.webp" alt="days" />
            <div className="overviewContentContainer">
            <div className="overviewContent">
              <h1>Activity overview</h1>
              <div className="overviewContentParagraph">
                <span><GoRepo/></span>
                <p>Contributed to <Link href="https://urban-dapper.vercel.app/" className="blueLink">Nikhil-Jalandhra/Urban-Dapper</Link>,<br /> 
                <Link href="https://goodness-in-bowl.vercel.app/" className="blueLink">Nikhil-Jalandhra/Goodness-In-Bowl</Link>,<br /> 
                <Link href="https://dark-studio-j1q2lzzy9-nikhil-jalandhras-projects.vercel.app" className="blueLink">Nikhil-Jalandhra/Dark-Studio</Link> <br /> 
                and 10 other repositories</p>
              </div>
            </div>
            <div className="overviewGraph">
              <img src="./gitgraph.webp" alt="graph" />
            </div>
            </div>
          </div>
        </div>
        <div className="overviewSectionSecond">
          <span className="nonHiglightedYear">2025</span>
          <span className="higlightedYear">2024</span>
        </div>
      </div>
    </div>
  );
}
