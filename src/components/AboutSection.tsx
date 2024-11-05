/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA: {
  title: string;
  id: string;
  content: React.JSX.Element;
}[] = [
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul className='list-disc grid md:grid-cols-2 pl-4'>
          <li>React Js</li>
          <li>Next Js</li>
          <li>Node Js</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Tailwind Css</li>
          <li>Unreal Engine</li>
          <li>Unity</li>
        </ul>
      )
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className='list-disc pl-2'>
          <li>Computer Science</li>
          <li>University Of Guararapes</li>
        </ul>
      ),
    },
  ];

function AboutSection() {
  const [tab, setTab] = useState('Skills');
  const [isPending, startTransition] = useTransition()


  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section className='text-white' id='#projects'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 xl:gap-16 sm:py-16'>
        <Image src="/images/computer.jpg" width={1000} height={1000} alt='About Image' />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg text-start'>
            I'm a Web developer and Game Developer passionate about creating amazing interactive games and responsive web applications.
            I Have experience working with JavaScript, React, Node.Js, MySQL, HTML, CSS, Unity, Unreal Engine and Git.
            I'm a quick learner and I am always looking to expand my knowledge and skill set.
            I'm a team player and I'm excited to work with others to create amazing products.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "Skills"}
              selectTab={() => handleTabChange('Skills')}
              title="Skills"
            />
            <TabButton
              active={tab === "Education"}
              selectTab={() => handleTabChange('Education')}
              title="Education"
            />
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
