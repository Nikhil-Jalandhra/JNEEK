import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";;
import Footer from "./components/(Footer)/Footer";
import Navbar from "./components/(Navbar)/Navbar";
import LoadingScreen from "./components/(LoadingScreen.js)/LoadingScreen";
import { ProjectProvider } from "@/context/ProjectContext";
import { getProjects } from "@/lib/getProjects";

export const metadata: Metadata = {
  title: {
    default: "Skill-Stack | JNEEK",
    template: "%s | JNEEK"
  },
  description: "Its all about me!.",
   icons: {
    icon: "/univ-images/JNEEK.webp",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const projects = await getProjects();

  return (
    <html lang="en">
      <body>
        {/* <LoadingScreen> */}
         <ProjectProvider value={projects}>
          <Navbar />
            {children}
          <Footer/>
         </ProjectProvider>
        {/* </LoadingScreen> */}
      </body>
    </html>
  );
}
