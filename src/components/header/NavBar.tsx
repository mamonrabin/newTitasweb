import React from "react";
import TopNav from "./TopNav";
import InfoNav from "./InfoNav";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <header className="w-full z-50">
      <TopNav />
      <InfoNav />
      <NavItems />
    </header>
  );
};

export default NavBar;
