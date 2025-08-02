import React from 'react';
import "./page.css";
import { TfiThought } from "react-icons/tfi";
import MainLayout from '@/app/components/(MainLayout)/MainLayout';

function Page() {
  return (
    <MainLayout>
      <div className='outOfBoxContainer'>
        <span className='outOfBoxThtIcn'>
          <TfiThought />
        </span>
        <h1><span className='outOfBoxAwait'>await</span> <span className='outOfBoxContent'>content</span>( );</h1>
        <p>// Still loading the future...</p>
      </div>
    </MainLayout>
  );
}

export default Page;
