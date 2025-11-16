import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./font";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";

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
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
