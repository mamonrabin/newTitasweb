import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./font";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import BackToTop from "../shared/BackToTop";
import TopNav from "../components/header/TopNav";
import InfoNav from "../components/header/InfoNav";


export const metadata: Metadata = {
  title: "Titas Web",
  description: "Personal Portfolio of Titas Mondal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <TopNav />
        <InfoNav />
        <NavBar/>
        {children}
        <Footer/>
        <BackToTop/>
        
        </body>
    </html>
  );
}
