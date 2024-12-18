import "./page.css";
import Blogcard from '../components/(Blogcard)/Blogcard';
import { FaUserGraduate } from "react-icons/fa";

function page() {
  return (
    <div className='blogPagecontainer'>
      <div className="blogPageHeader">
        <img src="/JNEEK.webp" alt="Logo" />
        <h1>Written by Arts (humanities) student <FaUserGraduate/></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse suscipit perspiciatis numquam.</p>
      </div>
        <div className="blogCardsContainer">
          <h1 className="blogPageHeading">Read one atleast.</h1>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
            <Blogcard/>
        </div>
    </div>
  );
}

export default page;
