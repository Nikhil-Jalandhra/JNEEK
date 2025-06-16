import "./page.css"
import React from 'react';
import Dropdown from "../components/(Dropdown)/Dropdown";
import { FaLink } from "react-icons/fa";
import project from "@/../database/projects.js";
import Link from "next/link";
import MainLayout from "../components/(MainLayout)/MainLayout";

export const metadata = {
  title: "Projects",
  description: "ALL Projects",
};

function page() {
  return (
    <MainLayout>
      <div className='repositoriesPage'>
          <div className="repoNav">
              <input type ="text" placeholder="Find a project..." />
              <div className="repoNavDropdown">
              <Dropdown children={{name: "Type", select: "All", list: ["Ecomerce", "Game", "JavaScript", "UI-UX"]}}/>
              <Dropdown children={{name: "Language", select: "language", list: ["JavaScript", "Java", "PHP","TypeScript"]}}/>
              <Dropdown children={{name: "Sort", select: "order", list: ["Last Update", "Name"]}}/>
              </div>
          </div>
            {project.map((item, index)=> (
              <div key={index} className="allProjectcontainer">
                <div className="projectFirstSection">
                  <h2><Link href={`/projects/${item.name}`}>{item.name}</Link></h2>
                  <p className="projectDescription">{item.description}</p>
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
    </MainLayout>
  );
}

export default page;
