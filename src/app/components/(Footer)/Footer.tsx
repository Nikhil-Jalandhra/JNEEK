import React from 'react';
import "./Footer.css"

import { FaRegCopyright } from "react-icons/fa";
import Image from 'next/image';

function Footer() {
  return (
    <div className='footerContainer'>
        <Image width={512} height={512} src="/univ-images/JNEEK.webp" alt="logo" />
        <span><FaRegCopyright/>2025 JNEEK, Developer.</span>
        <span>Terms</span>
        <span>Privacy</span>
        <span>Security</span>
        <span>Please share my personal information</span>
    </div>
  );
}

export default Footer;
