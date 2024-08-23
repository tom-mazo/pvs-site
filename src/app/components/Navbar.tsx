"use client";

import { useState } from 'react';
import {Navbar as NextUINavbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/app/assets/LogoSimple'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPathname = usePathname();

    const menuItems = [
      { title: "Servicios", path: "/servicios"},
      { title: "Portfolio", path: "/portfolio"},
      { title: "Sobre Nós", path: "/sobre-nos"},
      { title: "Contato", path: "/contato"},
    ];

    const closeNavbar = () => setIsMenuOpen(false);

    return (
        <NextUINavbar  isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}  isBlurred={false}>

            <NavbarContent  className="cursor-pointer">
                <Link href="/">
                    <Logo />
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="end">
              {menuItems.map(({ title, path }, index) => (
                  <NavbarMenuItem key={`${title}-${index}`}  isActive={path === currentPathname}>
                    <Link
                      color="foreground"
                      className="w-full text-nowrap"
                      href={path}
                    >
                      {title}
                    </Link>
                  </NavbarMenuItem>
                ))}
            </NavbarContent>

            <NavbarContent className="sm:hidden" justify="end">
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              />
            </NavbarContent>

            <NavbarMenu>
              {menuItems.map(({ title, path }, index) => (
                <NavbarItem key={`${title}-${index}`} isActive={path === currentPathname}>
                  <Link
                    href={path}
                    color="foreground"
                    onClick={closeNavbar}
                >
                    {title}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarMenu>

          </NextUINavbar>
    )
}

export default Navbar;