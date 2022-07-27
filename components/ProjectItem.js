import React from 'react'
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({title, backgroundImg, projectUrl}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-blue-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              className="rounded-xl group-hover:opacity-30 cursor-pointer"
              src={backgroundImg}
              alt="crypto"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center cursor-pointer">
                {title}
              </h3>
              <Link href={projectUrl}>
                <p className="text-center py-3 rounded-lg bg-white text-blue-700 font-bold text-lg cursor-pointer">
                  Information
                </p>
              </Link>
            </div>
          </div>
  )
}

export default ProjectItem
