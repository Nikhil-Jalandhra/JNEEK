import React from 'react';
import "./Footer.css"

import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='footerContainer'>
        <img src="/JNEEK.PNG" alt="logo" />
        <span><FaRegCopyright/>2025 JNEEK, Developer.</span>
        <span>Terms</span>
        <span>Privacy</span>
        <span>Seccurity</span>
        <span>Please share my personal information</span>
    </div>
  );
}

export default Footer;
