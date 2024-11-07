"use client";

import { useState } from 'react';
import {Navbar as NextUINavbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/assets/icons/LogoSimple'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentPathname = usePathname();

    const menuItems = [
      { title: "Serviços", path: "/servicios"},
      { title: "Portfolio", path: "/portfolio"},
      { title: "Sobre Nós", path: "/sobre-nos"},
    ];

    const closeNavbar = () => setIsMenuOpen(false);

    return (
        <NextUINavbar
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          isBlurred={false}
          height={'5rem'}
          classNames={{
            menuItem: [
              "flex",
              "relative",
              "h-full",
              "items-center",
              "text-2xl",
              "data-[active=true]:font-normal",
              "data-[active=true]:text-3xl",
              "data-[active=true]:after:content-['']",
              "data-[active=true]:after:absolute",
              "data-[active=true]:after:bottom-2",
              "data-[active=true]:after:left-0",
              "data-[active=true]:after:right-0",
              "data-[active=true]:after:h-[3px]",
              "data-[active=true]:after:rounded-[4px]",
              "data-[active=true]:after:bg-primary",
            ],
            wrapper: [
              "shadow-[0_0_12px_0_var(--gold)]",
              "md:shadow-none"
            ],
            menu: [
              "pt-6",
              "gap-6",
            ],
            item: [
              "data-[active=true]:font-normal",
              "data-[active=true]:underline",
              "data-[active=true]:underline-offset-8",
            ]
          }}
        >

            <NavbarContent  className="cursor-pointer">
                <Link href="/">
                    <Logo />
                </Link>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-8" justify="end">
              {menuItems.map(({ title, path }, index) => (
                  <NavbarMenuItem key={`${title}-${index}`}  isActive={path === currentPathname}>
                    <Link
                      color="foreground"
                      className="w-full text-nowrap font-serif text-pvs-gold tracking-wider"
                      href={path}
                    >
                      {title}
                    </Link>
                  </NavbarMenuItem>
                ))}
            </NavbarContent>

            <NavbarContent className="md:hidden text-pvs-gold" justify="end">
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
                    className="w-full text-nowrap text-2xl font-serif text-pvs-gold tracking-wider"
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