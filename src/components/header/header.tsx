"use client";

import { useState } from "react";

import Navbar from "@/components/header/navbar";
import LogoWithText from "@/components/logo-with-text";

import { Menu } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-10 backdrop-blur-md shadow-lg flex justify-between items-center h-16 bg-gradient-to-r from-self-blue/60 to-self-green/60 text-gray-100 tracking-wider">
      <LogoWithText />
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="rounded-full p-2 hover:bg-accent/50 hover:text-accent-foreground"
        >
          <Menu size={24} />
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } fixed top-16 left-0 z-40 w-full shadow-md md:static md:block md:w-auto md:shadow-none`}
      >
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
