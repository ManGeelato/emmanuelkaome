import React from 'react';
import Image from "next/image";

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
                            <Image src="/../public/assets/skills/html.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML5</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/css.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>CSS3</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/javascript.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/react.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React.js</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/nextjs.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>



                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/angular.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>AngularJS</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/node.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>

                

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/mongo.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>

                

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/tailwind.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>TailwindCSS</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/boot.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>BootstrapV5</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/shopify.png" alt="HTML5" width="65px" height="65px" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Shopify(e-commerce)</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-lg shadow-blue-500 rounded-xl hover:scale-115 ease-in duration-300 cursor-pointer">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/github1.png" alt="HTML5" width="65px" height="65px" />
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