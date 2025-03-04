"use client";
import "./Dropdown.css";
import { FaSortDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdCheck } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

interface dropdownInterface {
  children: {
    name: string;
    select: string;
    list: string[];
  }
}

function Dropdown({children}: dropdownInterface) {

    const {name, select, list} = children;
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [showDropDown, setShowDropDown] = useState("none");

    const dropDownToggle = () => {
      if (showDropDown === "none") {
        setShowDropDown("block")
      }else {
        setShowDropDown("none")
      }
    };

    const dropDownShow = () => {
      setShowDropDown("none");
    };
    
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
          if (dropDownRef.current && !dropDownRef.current?.contains(e.target as Node)) {
            setShowDropDown("none");
          }
      };
    
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

  return (
    <div>
      <div className="dropdown" ref={dropDownRef}> 
            <button onClick={dropDownToggle}>{name}<span><FaSortDown/></span> </button> 
            <div className="dropdownContent" style={{display: `${showDropDown}`}}> 
                <div className="dropdownLable">
                <p>Select {select}</p>
                <span onClick={dropDownShow}><RxCross2/></span>
                </div>
                <a href="#"><span><MdCheck style={{ display: "block" }} className="dropDownCross"/></span>All</a> 
                {list.map((item, index)=> (
                    <a key={index} href="#"><span><MdCheck  className="dropDownCross"/></span>{item}</a>
                ))} 
            </div> 
        </div>
    </div>
  );
}

export default Dropdown;
