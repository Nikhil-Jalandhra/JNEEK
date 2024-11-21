import "./page.css"
import { GoRepo } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";

export default function Home() {

  const projectArray = [
    {
      name: "Urban Dapper",
      description: "This is a E-Store of men's Items (Practice TypeScript)",
      lang: "TypeScript",
      star: "1",
      link: "https://urban-dapper.vercel.app/",
      color: "#3178C6"
    },
    {
      name: "Dark-Studio",
      description: "Cool UI-UX webstie",
      lang: "JavaScript",
      star: "1",
      link: "https://dark-studio-j1q2lzzy9-nikhil-jalandhras-projects.vercel.app",
      color: "#F1E05A"
    },
    {
      name: "Goodness-In-Bowl",
      description: "Created a food blogging website to enhance my skills with React.js",
      lang: "TypeScript",
      star: "1",
      link: "https://goodness-in-bowl.vercel.app/",
      color: "#3178C6"
    },
    {
      name: "Quize-App-My-First-Project",
      description: "This is my First Project with my own knowledge (#no Youtube tutorials)",
      lang: "JavaScript",
      star: "1",
      link: "https://quiz-app-my-first-project.vercel.app/",
      color: "#F1E05A"
    },
  ]

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
        {projectArray.map((item, index)=> (
          <div key={index} className="pinnedProjects">
          <h1><span><GoRepo/></span><Link className="blueLink" target="blank" href={item.link}>{item.name}</Link><p className="publicTag">Public</p></h1>
          <p className="pinnedProjectsDetails">{item.description}</p>
          <div className="pinnedProjectsMinor">
              <div className="langColor" style={{backgroundColor: `${item.color}`}}></div><p>{item.lang}</p>
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
