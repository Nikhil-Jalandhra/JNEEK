import "./page.css"
import React from 'react';
import Dropdown from "../components/(Dropdown)/Dropdown.tsx";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import project from "@/../database/projects.js";
import Link from "next/link";

function page() {
  return (
    <div className='repositoriesPage'>
        <div className="repoNav">
            <input type="text" placeholder="Find a repository..." />
            <Dropdown children={{name: "Type", select: "All", list: ["Ecomerce", "DataBase", "JavaScript", "UI-UX"]}}/>
            <Dropdown children={{name: "Language", select: "language", list: ["JavaScript", "Java", "PHP","TypeScript"]}}/>
            <Dropdown children={{name: "Sort", select: "order", list: ["Last Update", "Name"]}}/>
        </div>
          {project.map((item, index)=> (
            <div key={index} className="allProjectcontainer">
              <div className="projectFirstSection">
                <h1>{item.name}</h1>
                <h2>{item.description}</h2>
                <div className="langContainer">
                  <div className="langColor" style={{backgroundColor: `${item.color}`}}></div>
                  <p>{item.lang}</p>
                </div>
              </div>
              <div className="projectSecondSection">
                <p><Link href={item.link}>Project Lookup <FaArrowUpRightFromSquare/></Link></p>
                <p>Created on: {item.date}</p>
              </div>
            </div>
          ))}
        </div>
  );
}

export default page;
