import React from 'react';
import Image from "next/image";
import htmlLogo from "../public/assets/skills/html.png";
import cssLogo from "../public/assets/skills/css.png"
import javascriptLogo from "../public/assets/skills/javascript.png"
import angularLogo from "../public/assets/skills/angular.PNG"
import reactLogo from "../public/assets/skills/react.png"
import nextLogo from "../public/assets/skills/nextjs.png"
import nodeLogo from "../public/assets/skills/node.png"
import mongoLogo from "../public/assets/skills/mongo.png"
import tailwindLogo from "../public/assets/skills/tailwind.png"
import bootstrapLogo from "../public/assets/skills/Boot.PNG"
import shopifyLogo from "../public/assets/skills/shopify.png"
import githubLogo from "../public/assets/skills/github1.png"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#0F07D2]">Skills</p>
            <h2 className="py-4">What I Can Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={htmlLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML5</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={cssLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>CSS3</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={javascriptLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={reactLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React.js</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={nextLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>



                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={angularLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>AngularJS</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={nodeLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>
                
                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={mongoLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>

                

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={tailwindLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>TailwindCSS</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={bootstrapLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>BootstrapV5</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={shopifyLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Shopify(e-commerce)</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src={githubLogo} alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills