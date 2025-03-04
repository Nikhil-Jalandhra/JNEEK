import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import Link from "next/link";
import { LuDot } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Footer from "./components/(Footer)/Footer";
import Navbar from "./components/(Navbar)/Navbar";
import ToolTip from "./components/(ToolTip)/ToolTip";
import Image from "next/image";

export const metadata: Metadata = {
  title: "JNEEK",
  description: "Its all about me!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const SkillsArray = [
    {
      name: "HTML",
      image: "/skills/html.webp",
      about: "",
    },
    {
      name: "CSS",
      image: "/skills/css.webp",
      about: "",
    },
    {
      name: "JavaScript",
      image: "/skills/javascript.webp",
      about: "",
    },
    {
      name: "BootStrap",
      image: "/skills/bootstrap.webp",
      about: "",
    },
    {
      name: "Tailwiind",
      image: "/skills/tailwind.webp",
      about: "",
    },
    {
      name: "I-Dont-Think-So",
      image: "/skills/github.webp",
      about: "",
    },
    {
      name: "React",
      image: "/skills/react.webp",
      about: "",
    },
    {
      name: "Next",
      image: "/skills/next.webp",
      about: "",
    },
    {
      name: "PHP",
      image: "/skills/php.webp",
      about: "",
    },
  ];

  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="homePageSection">
          <div className="homeProfile">
            <div className="homeProfileContainer">
              <div className="homeHeroImages">
                <Image fill priority src="/univ-images/hero.webp" alt="heroImage" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <h1 className="petName">JNEEK</h1>
              <h1 className="myName">Nikhil-Jalandhra<LuDot/>he/him</h1>
              <button><h2>Developer</h2></button>
              <h2><span><SiGmail/></span> nikhiljalandhra@gmail.com</h2>
              <h2><span><IoLogoLinkedin/></span><Link href="https://www.linkedin.com/in/nikhil-jalandhra-1479742b0/">linkedin</Link></h2>
              <h2><span><FaGithub/></span><Link href="https://github.com/Nikhil-Jalandhra">git-hub</Link></h2>
              <div className="homeDivider"></div>
              <div className="homeSkillsSection">
                <h2>Skills</h2>
                <div className="homeSkillsContainer">
                  {SkillsArray.map((item, index) => (
                    <div className="skillImageContainer toolTipParent" key={item.name}>
                      <ToolTip children={item.name}/>
                        <Image src={item.image} alt={item.name} width={500} height={300} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="homeDynamic">
          {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
