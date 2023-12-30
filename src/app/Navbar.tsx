"use client";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth < 600);

        const handleResize = () => {
          setIsDesktop(window.innerWidth < 600);
        };
  
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);

    const menuItems = [
        "About",
        "Services",
        "Portfolio",
        "Skills",
        "Contact"
    ];

    return (
        <>
            {isDesktop ? (
                <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            className="sm:hidden"
                        />
                        <NavbarBrand>
                            <h1 className="text-xl font-semibold">Andrew Wladis</h1>
                        </NavbarBrand>
                    </NavbarContent>
                    <NavbarMenu>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    className="w-full text-white"
                                    href={`#${item.toLowerCase()}`}
                                    size="lg"
                                >
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                </Navbar>
            ) : (
                <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
                    <NavbarContent>
                        <NavbarBrand>
                            <h1 className="text-xl font-semibold">Andrew Wladis</h1>
                        </NavbarBrand>
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    className="w-full text-white"
                                    href={`#${item.toLowerCase()}`}
                                    size="lg"
                                >
                                    {item}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarContent>
                </Navbar>
            )}
        </>

    )
}
