import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
