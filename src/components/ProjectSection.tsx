"use client";
import React, { useState }from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
  {
    id: 1,
    title: "Emporium Of Verra",
    description: "Emporium of Verra is a platform for Ashes of Creation players, offering an interactive map, skill tree, guides, and a database to enhance gameplay. Continuously updated, it helps players navigate and progress in the world of Verra.",
    image: "/images/projects/emporium.jpg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.emporiumofverra.com",
  },
  {
    id: 2,
    title: "Always Zap",
    description: "Always Zap is a fast-paced platformer where I contributed to development. Players control Zap, a spider scaling challenging levels inspired by Super Meat Boy and Cuphead. This prototype highlights core mechanics.",
    image: "/images/projects/Alwayszap.png",
    tag: ["All", "Games"],
    gitUrl: "",
    previewUrl: "https://wise-foxes-ricardo.itch.io/prototype-az",
  },
  {
    id: 3,
    title: "Get Stickers",
    description: "get stickers - Project made in Nextjs that simulates a virtual store selling stickers.",
    image: "/images/projects/getstickers.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/stickers-shop-nextjs",
    previewUrl: "https://stickers-shop-nextjs.vercel.app",
  },
  {
    id: 4,
    title: "FoodHive",
    description: "FoodHive is a fast and intuitive website that offers a variety of delicious meals, from burgers to desserts, with unmissable offers. Easily navigate the menu, discover promotions and place your order in just a few clicks, all in a modern, responsive design.",
    image: "/images/projects/FoodHive.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/fastfood-nextjs",
    previewUrl: "https://fastfood-nextjs-one.vercel.app",
  },
  {
    id: 5,
    title: "Photos Gallery",
    description: "This project is a photo gallery developed with Next.js. It allows users to browse through a collection of images quickly and intuitively, providing a pleasant and responsive visual experience.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/PhotosGallery",
    previewUrl: "https://photos-gallery-weld.vercel.app/",
  },
  {
    id: 6,
    title: "Passcode",
    description: "The site is a demo of how to password protect pages in your application using a passcode. The password is '123456'. When you visit the site, you will be prompted to enter the password. If you enter the correct password, you will be able to access the site. Otherwise, you will be denied access.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/PasscodeNextJs",
    previewUrl: "https://passcode-next-js.vercel.app",
  },
  {
    id: 7,
    title: "Hotel Reservation",
    description: "This is an application made in next.js for study. a hotel booking landing page",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/HotelNextJs",
    previewUrl: "https://hotel-next-js.vercel.app",
  },
  {
    id: 8,
    title: "Car Hub",
    description: "This project is a car showcase developed with Next.js. It allows users to explore a collection of cars with detailed information, providing an immersive and responsive user experience.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/car_showcase",
    previewUrl: "https://car-showcase-mu-two.vercel.app/",
  },
  {
    id: 9,
    title: "Dating Request",
    description: "This is a simple and fun project, developed with Next.js and hosted on Vercel. The idea is to allow users to send dating requests in a light and relaxed manner.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/William-Dantas-Dev/dating-request-nextjs",
    previewUrl: "https://dating-request-mu.vercel.app",
  },
  {
    id: 10,
    title: "Parkour Game",
    description: "Simple Parkour System make with Unity",
    image: "/images/projects/6.png",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/William-Dantas-Dev/ParkourGame/tree/master",
    previewUrl: "https://william-shiroe-dev.itch.io/parkour-game",
  },
  {
    id: 11,
    title: "Roll A Ball",
    description: "Simple game made with Unity with the objective to collect all cubes.",
    image: "/images/projects/7.png",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/William-Dantas-Dev/RollABall",
    previewUrl: "https://william-shiroe-dev.itch.io/roll-a-ball",
  },
  {
    id: 12,
    title: "Procedural Maze Game",
    description: "Game made with Unreal Engine featuring a procedurally generated maze.",
    image: "/images/projects/8.png",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/William-Dantas-Dev/MazeGame",
    previewUrl: "https://william-shiroe-dev.itch.io/maze",
  },
  {
    id: 13,
    title: "Zombie Survival",
    description: "Project Zombie is a simple survival game made with Unreal Engine. Fight off endless waves of zombies and see how long you can last!",
    image: "/images/projects/9.png",
    tag: ["All", "Games"],
    gitUrl: "",
    previewUrl: "https://william-shiroe-dev.itch.io/project-zombie",
  },
  {
    id: 14,
    title: "Stacks Blocks",
    description: "Stack Blocks is an endless stacking game where you try to stack as many blocks as possible without letting them fall. How high can you go? Challenge yourself and see how many blocks you can stack!",
    image: "/images/projects/10.png",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/William-Dantas-Dev/Unity-StacksBlocks",
    previewUrl: "https://william-shiroe-dev.itch.io/stackblocks",
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
