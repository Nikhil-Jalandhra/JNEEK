import "./page.css";
import project from "@/../database/projects.js";
import { GoRepo } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import ToolTip from "./components/(ToolTip)/ToolTip";
import Image from "next/image";

export default function Home() {  

  return (
    <div>
      <div className="overviewAbout">
        <h2>
        As a fresher seeking my first role as a front-end developer, I bring creativity, passion, and a strong work ethic to the
        table. I specialize in responsive design, amazing UI/UX experiences, and intricate animations. Proficient in HTML, CSS, and React,
        with skills in GitHub/Git, Tailwind CSS, and Framer Motion. I am eager to contribute to innovative projects and grow
        professionally in web development.
        </h2>
        <h2>
        As a fresher seeking my first role as a front-end developer, I bring creativity, passion, and a strong work ethic to the
        table. I specialize in responsive design, amazing UI/UX experiences, and intricate animations. Proficient in HTML, CSS, and React,
        with skills in GitHub/Git, Tailwind CSS, and Framer Motion. I am eager to contribute to innovative projects and grow
        professionally in web development.
        </h2>
      </div>
      <h2 className="overviewHeading">Projects</h2>
      <div className="overviewProjects">
        {project.map((item, index)=> (
          <div key={index} className="pinnedProjects">
          <h2>
            <span>
              <GoRepo/>
            </span>
            <Link className="blueLink toolTipParent" target="blank" href={item.link}>
              {item.name}
            <ToolTip children={item.name}/>
            </Link>
              <p className="publicTag">Public</p>
          </h2>
          <p className="pinnedProjectsDetails">{item.description}</p>
          <div className="pinnedProjectsMinor">
              <div className="langColor" style={{backgroundColor: `var(--${item.lang})`}}></div><p>{item.lang}</p>
              <div className="pinnedProjectStar"><h2><FaRegStar/></h2></div><p>{item.star}</p>
          </div>
        </div>
        ))}
      </div>
      <div className="overviewDetailsContainer">
        <div className="overviewSectionFirst">
          <h2>600 contributions in the last year</h2>
          <div className="overviewDetails">
            <Image width={862} height={177} className="overviewDays" src="/univ-images/gitdays.webp" alt="days" />
            <div className="overviewContentContainer">
            <div className="overviewContent">
              <h2>Activity overview</h2>
              <div className="overviewContentParagraph">
                <span><GoRepo/></span>
                <h2>Contributed to <Link href="https://urban-dapper.vercel.app/" className="blueLink">Nikhil-Jalandhra/Urban-Dapper</Link>,<br /> 
                <Link href="https://goodness-in-bowl.vercel.app/" className="blueLink">Nikhil-Jalandhra/Goodness-In-Bowl</Link>,<br /> 
                <Link href="https://dark-studio-j1q2lzzy9-nikhil-jalandhras-projects.vercel.app" className="blueLink">Nikhil-Jalandhra/Dark-Studio</Link> <br /> 
                and 10 other repositories</h2>
              </div>
            </div>
            <div className="overviewGraph">
              <Image width={300} height={322} src="/univ-images/gitgraph.webp" alt="graph" />
            </div>
            </div>
          </div>
        </div>
        <div className="overviewSectionSecond">
          <div className="learningYears"><h2>2025</h2></div>
          <div className="learningYears higlightedYear"><h2>2024</h2></div>
        </div>
      </div>
    </div>
  );
}
