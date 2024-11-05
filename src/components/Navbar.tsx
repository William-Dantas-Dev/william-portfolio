"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import ImageIcon from './ImageIcon';

const navLinks = [
  {
    src: "/images/contact-icons/whatsapp-icon.png",
    path: "https://wa.me//558196181904",
    alt: 'whatsapp-icon',
    id: 1,
  },
  {
    src: "/images/contact-icons/linkedin-icon.png",
    path: "https://www.linkedin.com/in/wil-developer/",
    alt: 'whatsapp-icon',
    id: 2,
  },
  {
    src: "/images/contact-icons/github-icon.png",
    path: "https://github.com/William-Dantas-Dev",
    alt: 'github-icon',
    id: 3,
  },
  {
    src: "/images/contact-icons/discord-icon.png",
    path: "https://discordapp.com/channels/@me/_shiroegamingdev",
    alt: 'discord-icon',
    id: 4,
  },
]


function Navbar() {
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-opacity-90 bg-[#121212]'>
      <div className='flex flex-wrap items-center justify-center md:justify-end mx-auto px-10 py-8'>
        <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold hidden'>
          William
        </Link>
        <div className='menu w-auto' id='navbar'>
          <ul className='flex flex-row space-x-4'>
            {navLinks.map((link) => (
              <li key={link.id} className='content-center'>
                <a href={link.path} target="_blank" rel="noopener noreferrer">
                  <ImageIcon src={link.src} alt={link.alt as string} size={40}/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
