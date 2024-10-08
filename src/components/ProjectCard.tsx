import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl } : {
  imgUrl: string,
  title: string,
  description: string,
  gitUrl: string,
  previewUrl: string,
}) => {
  return (
    <div>
      <div className='h-96 md:h-48 lg:h-44 xl:h-56 2xl:h-72 w-full content-center rounded-t-xl relative group'>
        <Image className='h-96 md:h-48 lg:h-44 xl:h-56 2xl:h-72 w-full' src={imgUrl} alt={title} height={1000} width={1000}/>
        <div className='gap-2 overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
          {gitUrl && (
            <Link href={gitUrl} target="_blank" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
              <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
            </Link>
          )}
          {previewUrl && (
            <Link href={previewUrl} target="_blank" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'/>
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-6 h-52 w-full overflow-hidden">
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] text-ellipsis'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;
