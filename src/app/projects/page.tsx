"use client";
import "./page.css";
import React, { useEffect, useState, useCallback } from "react";
import Dropdown from "@/app/components/(Dropdown)/Dropdown";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import MainLayout from "@/app/components/(MainLayout)/MainLayout";
import { useProjects, Project } from "@/context/ProjectContext";

function Page() {
  const projects = useProjects();

  const [data, setData] = useState<Project[]>(projects);
  const [searchState, setSearchState] = useState<string>("");
  const [type, setType] = useState<string>("All");
  const [language, setLanguage] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<string>("All");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  const filterData = useCallback(() => {
    let filtered = [...projects];

    if (type !== "All") {
      filtered = filtered.filter((item) => item.type.includes(type));
    }

    if (language !== "All") {
      filtered = filtered.filter((item) => item.language === language);
    }

    if (searchState.trim().length >= 3) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchState.toLowerCase())
      );
    }

    if (sortOrder === "Name") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "Last Update") {
      filtered = filtered.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    setData(filtered);
  }, [projects, type, language, searchState, sortOrder]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <MainLayout>
      <div className="repositoriesPage">
        <div className="repoNav">
          <input
            type="text"
            value={searchState}
            onChange={handleSearchInput}
            placeholder="Find a project... (At least 3 char)"
          />
          <div className="repoNavDropdown">
            <Dropdown
              name="Type"
              select="All"
              list={["Fullstack", "UI", "API", "E-Commerce"]}
              onClick={setType}
              active={type}
            />
            <Dropdown
              name="Language"
              select="language"
              list={["JavaScript", "TypeScript"]}
              onClick={setLanguage}
              active={language}
            />
            <Dropdown
              name="Sort"
              select="order"
              list={["Name", "Last Update"]}
              onClick={setSortOrder}
              active={sortOrder}
            />
          </div>
        </div>

        {data.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          data.map((item: Project, index: number) => (
            <div key={index} className="allProjectcontainer">
              <div className="projectFirstSection">
                <h2>
                  <Link href={`/projects/${item.name}`}>{item.name}</Link>
                </h2>
                <p className="projectDescription">{item.description}</p>
                <div className="langContainer">
                  <div
                    className="langColor"
                    style={{ backgroundColor: `var(--${item.language})` }}
                  ></div>
                  <p>{item.language}</p>
                </div>
              </div>
              <div className="projectSecondSection">
                <p>
                  <Link href={item.link} target="_blank">
                    Project Lookup <span><FaLink /></span>
                  </Link>
                </p>
                <p>Birthday: {item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </MainLayout>
  );
}

export default Page;
