"use client";
import "./Dropdown.css";
import { FaSortDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdCheck } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

interface DropdownProps {
  name: string;
  select: string;
  list: string[];
  onClick: (item: string) => void;
  active: string;
}

function Dropdown({ name, select, list, onClick, active }: DropdownProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropdown = () => setShowDropDown(prev => !prev);
  const hideDropdown = () => setShowDropDown(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropDownRef}>
      <button onClick={toggleDropdown}>
        {name}
        <span><FaSortDown /></span>
      </button>
      <div className="dropdownContent" style={{ display: showDropDown ? "block" : "none" }}>
        <div className="dropdownLable">
          <p>Select</p>
          <span onClick={hideDropdown}><RxCross2 /></span>
        </div>

        <a
          href="#"
          onClick={() => onClick("All")}
          className={active === "All" ? "active" : ""}
        >
          <span>
            <MdCheck
              className="dropDownCross"
              style={{ display: active === "All" ? "block" : "none" }}
            />
          </span>
          All
        </a>

        {list.map((item, index) => (
          <a
            key={index}
            onClick={() => onClick(item)}
            href="#"
            className={item === active ? "active" : ""}
          >
            <span>
              <MdCheck
                className="dropDownCross"
                style={{ display: item === active ? "block" : "none" }}
              />
            </span>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
