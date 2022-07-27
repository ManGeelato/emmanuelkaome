import React from "react";
import Image from "next/image";
import Link from "next/link";
import loanImage from "../public/assets/projects/loan.PNG";
import { RiRadioButtonFill } from "react-icons/ri";

const loan = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={loanImage}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Cash Float Finance</h2>
          <h3>HTML5 /CSS3 /Javascript /Github pages</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This website is built using HTML5, CSS3 and Javascript. It was a
            project for a client who wanted a professional website for loan
            applications detailing more information about their company. It's
            fully responsive on both mobile and desktop screens. I hosted this
            website on Github pages
          </p>
          <button className="px-8 py-2 mt-4 mr-8"><Link href="https://mangeelato.github.io/cashfloatfinance/">Live Project</Link></button>
          <button className="px-8 py-2 mt-4"><Link href="https://github.com/ManGeelato/cashfloatfinance">Code</Link></button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-blue-500 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML5
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS3
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-blue-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Github pages
              </p>
            </div>
          </div>
        </div>
        <Link href="/">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default loan;
