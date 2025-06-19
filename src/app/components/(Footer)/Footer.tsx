import React from 'react';
import "./Footer.css"

import { FaRegCopyright } from "react-icons/fa";
import Image from 'next/image';

function Footer() {
  return (
    <div className='footerContainer'>
      <div className='footerContianerLogo'>
        <Image width={512} height={512} src="/univ-images/JNEEK.webp" alt="logo" />
        <span><FaRegCopyright/>2025 JNEEK, Developer.</span>
      </div>
      <div className='footerTerm'>
        <span>Terms</span>
        <span>Privacy</span>
        <span>Security</span>
      </div>
      <div className='footerPrsnlInfo'>
        <span>Please share my personal information</span>
      </div>
    </div>
  );
}

export default Footer;
