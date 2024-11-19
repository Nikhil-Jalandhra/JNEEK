import type { Metadata } from "next";
import "./globals.css";
import "./page.css";
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
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="homePageSection">
          <div className="homeProfile">
            Profile
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
