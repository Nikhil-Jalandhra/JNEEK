"use client"
import React, { useEffect, useState } from 'react';
import "./LoadingScreen.css"
import { usePathname } from 'next/navigation';

const LoadingScreen = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [splashMount, setSplashMount] = useState(false);

  const path = usePathname();
  
  useEffect(() => {
    if(path == "/"){
      const timer = setTimeout(()=> { setSplashMount(true)} , 5000);
      return ()=> clearTimeout(timer);
    }else{
      setSplashMount(true);
    }
   
  }, [path]);
  
  if( path !== '/' || splashMount){
    return <main>{children}</main>
  }

  return (
      <div className='splashContainer'>
        <div className='splashAnimationContainer'>
          <div className='splashMover'>
            <h1>HATERS WILL SAY, THIS IS LOOKING LIKE SOMETHING.</h1>
            <h1>Trust me. Actually, this is mine.</h1>
            <h1>Jokes apart. &#40; GITHUB🌟 &#41;</h1>
          </div>
        </div>
      </div>
  );
}

export default LoadingScreen;