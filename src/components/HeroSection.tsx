/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import ImageIcon from './ImageIcon';

const navLinks = [
  {
    src: "/images/icons/react-icon.png",
    alt: 'react-icon',
    id: 1,
  },
  {
    src: "/images/icons/nextjs-icon.png",
    alt: 'nextjs-icon',
    id: 2,
  },
  {
    src: "/images/icons/nodejs-icon.png",
    alt: 'nodejs-icon',
    id: 3,
  },
  {
    src: "/images/icons/javascript-icon.png",
    alt: 'javascript-icon',
    id: 4,
  },
  {
    src: "/images/icons/typescript-icon.png",
    alt: 'typescript-icon',
    id: 5,
  },
  {
    src: "/images/icons/tailwindcss-icon.png",
    alt: 'tailwindcss-icon',
    id: 6,
  },
  {
    src: "/images/icons/unity-icon.png",
    alt: 'unity-icon',
    id: 7,
  },
  {
    src: "/images/icons/unreal-icon.png",
    alt: 'unreal-icon',
    id: 8,
  },
]


const HeroSection = () => {
  return (
    <section className="">
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-left content-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Hello, I'm{" "}
            </span>
            <TypeAnimation 
              sequence={[
                "William",
                1000,
                "A Web Developer",
                1000,
                "A Game Developer",
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-2'>
            Next Js | Front End Developer | Game Developer
          </p>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
            React.Js • Next.Js • Node.Js • JavaScript • TypeScript • Unity • Unreal Engine
          </p>
          <div className='flex gap-3 pb-6'>
            {navLinks.map((link) => (
              <ImageIcon key={link.id} src={link.src} alt={link.alt as string} size={25}/>
            ))}
          </div>
          <div>
            <a href={"https://wa.me//558196181904"} target="_blank">
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-purple-800 hover:bg-slate-200 text-white'>
                Hire Me
              </button>
            </a>
            <a href={"/curriculum/Curriculum.pdf"} download>
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-purple-800 hover:bg-slate-800 text-white mt-3'>
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
              </button>
            </a>
            
          </div>
        </div>
        
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src={"/images/profile.png"}
              alt='hero-image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;