import React from "react";
import Image from "next/image";
import Link from "next/link";
import cryptoImage from "../public/assets/projects/cryptoC.PNG";
import {RiRadioButtonFill} from  "react-icons/ri"

const ucrypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImage}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">U-Crypto Currency</h2>
          <h3>React.js /TailwindCSS /Firebase /Coingecko API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            This web application is built using React.js, TailwindCSS, Firebase and Coingecko
            backend API. Users can sign up and manage their cryptocurrency with
            their own personalized accounts. I hosted this application on firebase
          </p>
          {/* <Link
                href="https://www.linkedin.com/in/emmanuel-kaome-0247b7224/"
                target="_blank"
              >
                <FaLinkedinIn />
              </Link> */}
          <button className="px-8 py-2 mt-4 mr-8">
            <Link href="https://u-crypto.web.app/" target="_blank">
            Live Project
            </Link>
          </button>
          <button className="px-8 py-2 mt-4">
            <Link href="https://github.com/ManGeelato/u-crypto">Code</Link>
            </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-blue-500 rounded-xl p-4">
            <div className="p-2">
                <p className="text-center font-bold pb-2">Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                    <p className="text-blue-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/> React.js</p>
                    <p className="text-blue-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/> Tailwind CSS</p>
                    <p className="text-blue-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/> Javascript</p>
                    <p className="text-blue-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/> Firebase Database</p>
                    <p className="text-blue-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/> Coingecko API</p>
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

export default ucrypto;
