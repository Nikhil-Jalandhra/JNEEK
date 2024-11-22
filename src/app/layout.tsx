import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";
import Link from "next/link";
import { LuDot } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Navbar from "./components/(Navbar)/Navbar.tsx";
import Footer from "./components/(Footer)/Footer.tsx";

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
      image: "./html.webp",
      about: "",
    },
    {
      name: "CSS",
      image: "./css.webp",
      about: "",
    },
    {
      name: "JavaScript",
      image: "./javascript.webp",
      about: "",
    },
    {
      name: "BootStrap",
      image: "./bootstrap.webp",
      about: "",
    },
    {
      name: "Tailwiind",
      image: "./tailwind.webp",
      about: "",
    },
    {
      name: "'GitHub",
      image: "./github.webp",
      about: "",
    },
    {
      name: "React",
      image: "./react.webp",
      about: "",
    },
    {
      name: "Next",
      image: "./next.webp",
      about: "",
    },
    {
      name: "PHP",
      image: "./php.webp",
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
              <img src="./hero.webp" alt="heroImage" />
              <h1 className="petName">Jneek</h1>
              <h2 className="myName">Nikhil-Jalandhra <LuDot/> he/him</h2>
              <button>Developer</button>
              <p><span><IoLocationOutline/></span> nikhiljalandhra@gmail.com</p>
              <p><span><IoLogoLinkedin/></span><Link href="https://www.linkedin.com/in/nikhil-jalandhra-1479742b0/">linkedin</Link></p>
              <p><span><FaGithub/></span><Link href="https://github.com/Nikhil-Jalandhra">git-hub</Link></p>
              <div className="homeDivider"></div>
              <div className="homeSkillsSection">
                <h1>Skills</h1>
                <div className="homeSkillsContainer">
                  {SkillsArray.map((item, index) => (
                    <img key={index} src={item.image} alt={item.name} />
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
