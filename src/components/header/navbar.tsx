import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {

  const menuItems = [
    {
      title: "BERANDA",
      href: "/",
    },
    {
      title: "PROFIL",
      href: "/profil",
    },
    {
      title: "DATA DESA",
      href: "/data-desa",
    },
    {
      title: "KEGIATAN USAHA",
      href: "/kegiatan-usaha",
    },
    {
      title: "GALERI",
      href: "/galeri",
    },
  ];

  return (
    <NavigationMenu
      className="flex flex-col md:flex-row"
    >
      <NavigationMenuList className="flex flex-col md:flex-row w-screen md:w-full bg-black/70 py-3 md:bg-transparent">
        {menuItems.map((item, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink
                href={item.href}
                className="flex h-9 w-screen md:w-full items-center justify-center rounded-md bg-transparent px-4 py-6 md:py-2 text-xs font-semibold transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
