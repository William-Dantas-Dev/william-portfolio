"use client";
import React, { useState }from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: "Emporium Of Verra",
    description: "Emporium of Verra is a project that aims to help players sell items within the game Ashes of Creation. It will also feature other helpful tools, such as a skill calculator and an interactive map.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/emporium-of-verra",
    previewUrl: "https://emporium-of-verra.vercel.app",
  },
  {
    id: 1,
    title: "Passcode",
    description: "The site is a demo of how to password protect pages in your application using a passcode. The password is '123456'. When you visit the site, you will be prompted to enter the password. If you enter the correct password, you will be able to access the site. Otherwise, you will be denied access.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/PasscodeNextJs",
    previewUrl: "https://passcode-next-js.vercel.app",
  },
  {
    id: 1,
    title: "Hotel Reservation",
    description: "This is an application made in next.js for study. a hotel booking landing page",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/HotelNextJs",
    previewUrl: "https://hotel-next-js.vercel.app",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
      <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag name='All' isSelected={tag === "All"} onClick={handleTagChange}/>
        <ProjectTag name='Web' isSelected={tag === "Web"} onClick={handleTagChange}/>
        {/* <ProjectTag name='Mobile' isSelected={tag === "Mobile"} onClick={handleTagChange}/> */}
        <ProjectTag name='Games' isSelected={tag === "Games"} onClick={handleTagChange}/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectSection
