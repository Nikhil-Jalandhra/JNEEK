import "./Dropdown.css";
import { FaSortDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdCheck } from "react-icons/md";

function Dropdown({children}) {

    const {name, select, list} = children;

  return (
    <div>
      <div className="dropdown"> 
            <button>{name}<span><FaSortDown/></span> </button> 
            <div className="dropdownContent"> 
                <div className="dropdownLable">
                <p>Select {select}</p>
                <span><RxCross2/></span>
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
