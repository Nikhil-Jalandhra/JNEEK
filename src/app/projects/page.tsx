import "./page.css"
import React from 'react';
import Dropdown from "../components/(Dropdown)/Dropdown";
import { FaLink } from "react-icons/fa";
import project from "@/../database/projects.js";
import Link from "next/link";

function page() {
  return (
    <div className='repositoriesPage'>
        <div className="repoNav">
            <input type="text" placeholder="Find a project..." />
            <Dropdown children={{name: "Type", select: "All", list: ["Ecomerce", "Game", "JavaScript", "UI-UX"]}}/>
            <Dropdown children={{name: "Language", select: "language", list: ["JavaScript", "Java", "PHP","TypeScript"]}}/>
            <Dropdown children={{name: "Sort", select: "order", list: ["Last Update", "Name"]}}/>
        </div>
          {project.map((item, index)=> (
            <div key={index} className="allProjectcontainer">
              <div className="projectFirstSection">
                <h1><Link href="/projects">{item.name}</Link></h1>
                <h2>{item.description}</h2>
                <div className="langContainer">
                  <div className="langColor" style={{backgroundColor: `var(--${item.lang})`}}></div>
                  <p>{item.lang}</p>
                </div>
              </div>
              <div className="projectSecondSection">
                <p><Link href={item.link} target="blank">Project Lookup <span><FaLink/></span></Link></p>
                <p>Birthday: {item.date}</p>
              </div>
            </div>
          ))}
        </div>
  );
}

export default page;
