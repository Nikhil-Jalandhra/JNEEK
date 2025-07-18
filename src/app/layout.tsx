import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";;
import Footer from "./components/(Footer)/Footer";
import Navbar from "./components/(Navbar)/Navbar";
import LoadingScreen from "./components/(LoadingScreen.js)/LoadingScreen";

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

  return (
    <html lang="en">
      <body>
        {/* <LoadingScreen> */}
          <Navbar/>
            {children}
          <Footer/>
        {/* </LoadingScreen> */}
      </body>
    </html>
  );
}
