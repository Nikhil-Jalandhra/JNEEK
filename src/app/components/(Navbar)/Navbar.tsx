import "./Navbar.css";
import React from "react";
import Link from "next/link";

import { GoGitPullRequest } from "react-icons/go";
import { PiDownloadLight } from "react-icons/pi";
import { GoIssueOpened } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSortDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

//------------------------------------------

import { LuBookOpen } from "react-icons/lu";
import { GoRepo } from "react-icons/go";
import { VscGithubProject } from "react-icons/vsc";
import { GoPackage } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";

function Navbar() {

  const navLinks = [
    {
      navName: "Overview",
      navLink: "/",
      navIcon: <LuBookOpen/>
    },
    {
      navName: "Repositories",
      navLink: "/repositories",
      navIcon: <GoRepo/>
    },
    {
      navName: "Projects",
      navLink: "/projects",
      navIcon: <VscGithubProject/>
    },
    {
      navName: "Packages",
      navLink: "/packages",
      navIcon: <GoPackage/>
    },
    {
      navName: "Stars",
      navLink: "/stars",
      navIcon: <FaRegStar/>
    }
  ];

  return (
    <div className="navBar">
      <div className="navFirstSection">
        <div className="navFirstSectionBox">
          <RxHamburgerMenu />
        </div>
        <img src="/JNEEK.webp" alt="logo" />
        <h1>Nikhil-Jalandhra</h1>
      </div>
      <div className="navSecondSection">
        <div className="navInput">
        <FiSearch className="navInputSearch"/>Type<span>/</span>to search
        </div>
        <div className="navDivider"></div>
        <div className="navDropdown">
          <span><FaPlus/></span>
          <span><FaSortDown/></span>
        </div>
        <div className="navReviewButton">
          <GoIssueOpened/>
        </div>
        <div className="navPullRequest">
          <GoGitPullRequest/>
        </div>
        <div className="navResumeDownload">
          <PiDownloadLight/>
        </div>
        <div className="navHeroimg">
          <img src="/hero.webp" alt="heroImg" />
        </div>
      </div>
      <div className="navBaseSection">
          {navLinks.map((item, index)=> (
            <div className="navLinkButton" key={index}>
              <Link href={item.navLink}><span>{item.navIcon}</span>{item.navName}</Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
