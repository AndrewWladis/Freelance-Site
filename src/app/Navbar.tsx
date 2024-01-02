"use client";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button, NavbarBrand } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsDesktop(window.innerWidth < 500);

        const handleResize = () => {
          setIsDesktop(window.innerWidth < 500);
          console.log(window.innerWidth)
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
                    <NavbarContent className="w-full flex flex-row justify-center items-center">
                        {menuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    className="w-full text-white"
                                    href={`#${item.toLowerCase()}`}
                                    size="lg"
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 700
                                    }}
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
