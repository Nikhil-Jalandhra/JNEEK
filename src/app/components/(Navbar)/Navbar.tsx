import { GoGitPullRequest } from "react-icons/go";
import { GoIssueOpened } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSortDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navBar">
      <div className="navFirstSection">
        <div className="navFirstSectionBox">
          <RxHamburgerMenu />
        </div>
        <img src="/JNEEK.png" alt="logo" />
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
        <div className="navNotification">
          <GoGitPullRequest/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
