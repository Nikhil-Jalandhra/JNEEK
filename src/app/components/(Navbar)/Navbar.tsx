"use client"
import "./Navbar.css";
import React from "react";
import Link from "next/link";
import project from "../../../../database/projects";
import ToolTip from "../(toolTip)/ToolTip";

import { GoGitPullRequest } from "react-icons/go";
import { LuInbox } from "react-icons/lu";
import { GoIssueOpened } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSortDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

//------------------------------------------

import { MdWork } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { RiBox3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";


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
      navIcon: <MdWork/>,
      navProjectLength: project.length,
      navClassName: "navProjectLength"
    },
    {
      navName: "Blogs",
      navLink: "/blogs",
      navIcon: <RiMessage3Fill/>
    },
    {
      navName: "OutOfBox",
      navLink: "/outofBox",
      navIcon: <RiBox3Fill />
    }
  ];

  const pathName = usePathname();

  return (
    <div className="navBar">
      <div className="navFirstSection">
        <div className="navFirstSectionBox">
          <RxHamburgerMenu />
        </div>
        <img src="/JNEEK.webp" alt="logo" />
        <Link href='/' ><h1>Nikhil-Jalandhra</h1></Link>
      </div>
      <div className="navSecondSection">
        <div className="navInput">
        <FiSearch className="navInputSearch"/>Type<span>/</span>to search
        </div>
        <div className="navDivider"></div>
        <div className="navDropdown toolTipParent">
          <span><FaPlus/></span>
          <span><FaSortDown/></span>
          <ToolTip children={"oh checking details..."}/>
        </div>
        <div className="navReviewButton toolTipParent">
          <GoIssueOpened/>
          <ToolTip children={"props"}/>
        </div>
        <div className="navPullRequest toolTipParent">
          <GoGitPullRequest/>
          <ToolTip children={"props"}/>
        </div>
        <div className="navResumeDownload toolTipParent">
          <LuInbox/>
          <ToolTip children={"Download Resume"}/>
        </div>
        <div className="navHeroimg">
          <img src="/hero.webp" alt="heroImg" />
        </div>
      </div>
      <div className="navBaseSection">
          {navLinks.map((item, index)=> (
            <div key={index} className="navLinkContainer">
              <div className="navLinkButton" key={index}>
                <Link href={item.navLink}>
                  <span>{item.navIcon}</span>
                  {item.navName}
                  <div className={item?.navClassName}>{item?.navProjectLength}</div>
                </Link>
              </div>
              <div className={item.navLink == pathName ? "navLinkUnderLine" : ""} ></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
