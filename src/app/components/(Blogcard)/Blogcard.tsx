import React from 'react';
import "./Blogcard.css";
import { RiPuzzle2Fill } from "react-icons/ri";

function Blogcard() {
  return (
    <div className='blogCardContainer'>
        <h2><RiPuzzle2Fill/>Hlo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta iure dolorum, repellat optio ipsum suscipit error deserunt?</p>
        <button>Read more</button>
    </div>
  );
}

export default Blogcard;
