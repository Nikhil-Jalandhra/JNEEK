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

import { GoRepo } from "react-icons/go";
import { TbLogs } from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";

function Navbar() {

  const navLinks = [
    {
      navName: "About",
      navLink: "/",
      navIcon: <FaUserGraduate/>
    },
    {
      navName: "Projects",
      navLink: "/projects",
      navIcon: <GoRepo/>
    },
    {
      navName: "Blogs",
      navLink: "/blogs",
      navIcon: <TbLogs/>
    },
    {
      navName: "Stars",
      navLink: "/stars",
      navIcon: <FaUserGraduate/>
    }
  ];

  return (
    <div className="navBar">
      <div className="navFirstSection">
        <div className="navFirstSectionBox">
          <RxHamburgerMenu />
        </div>
        <img src="/JNEEK.webp" alt="logo" />
        <h1><Link href='/' >Nikhil-Jalandhra</Link></h1>
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
