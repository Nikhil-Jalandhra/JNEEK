"use client"
import "./Navbar.css";
import React from "react";
import Link from "next/link";
import project from "../../../../database/projects";
import ToolTip from "../(ToolTip)/ToolTip";

import { GoGitPullRequest } from "react-icons/go";
import { MdDownload } from "react-icons/md";
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
import Image from "next/image";


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
      navName: "Reflection",
      navLink: "/reflection",
      navIcon: <RiMessage3Fill/>
    },
    {
      navName: "OutOfBox",
      navLink: "/outofbox",
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
        <Image width={512} height={512} src="/univ-images/JNEEK.webp" alt="logo" />
        <Link href='/' ><h2>Nikhil-Jalandhra</h2></Link>
      </div>
      <div className="navSecondSection">
        <div className="navInput">
        <FiSearch className="navInputSearch"/>Type<span>/</span>to search
        </div>
        <div className="navDivider"></div>
        <div className="navDropdown toolTipParent">
          <span><FaPlus/></span>
          <span><FaSortDown/></span>
          <ToolTip children={"Oh you"}/>
        </div>
        <div className="navReviewButton toolTipParent">
          <GoIssueOpened/>
          <ToolTip children={"are"}/>
        </div>
        <div className="navPullRequest toolTipParent">
          <GoGitPullRequest/>
          <ToolTip children={"checking details..."}/>
        </div>
        <div className="navResumeDownload toolTipParent">
          <MdDownload/>
          <ToolTip children={"Download Resume"}/>
        </div>
        <div className="navHeroimg">
          <Image width={827} height={1063} src="/univ-images/hero.webp" alt="heroImg" />
        </div>
      </div>
      <div className="navBaseSection">
          {navLinks.map((item, index)=> (
            <div key={index} className="navLinkContainer">
                <Link className="navLinkButton" key={index} href={item.navLink}>
                  <span>{item.navIcon}</span>
                  <h2 className={item.navLink == pathName ? "navLinkFontBold" : "navLinkFontSimple"} >{item.navName}</h2>
                  <div className={item?.navClassName}>{item?.navProjectLength}</div>
                </Link>
              <div className={item.navLink == pathName ? "navLinkUnderLine" : ""} ></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
