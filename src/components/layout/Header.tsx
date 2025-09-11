"use client";
import React from 'react'
import "@/styles/mixins.scss"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
];

const Header = () => {
    const pathname = usePathname();

    return (
        <header className='header_section' >
            <nav>
                <Link href="/" className="logo" >
                    <Image src="/logo.png" alt="Logo" width={176} height={78} priority />
                </Link>

                <ul className="navlinks" >
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`${pathname === link.href}`} >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    )
}

export default Header
