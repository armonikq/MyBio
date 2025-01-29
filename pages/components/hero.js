"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Hero() {
    const imageUrl ="/images/back1.jpg";
    return (
        <header className="min-h-screen flex items-center justify-center relative overflow-hidden ">
            <div className="absolute inset-0  bg-cover bg-center opacity-30 w-100"  style={{backgroundImage : `url(${imageUrl})`  }}/>
            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-600 ring-offset-4 ring-offset-gray-900">
                            <img
                                src="images/furkan.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Furkan Ayhan
                    </h1>
                    <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
                        Frontend Developer
                    </div>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Building exceptional digital experiences with modern web technologies
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://github.com/armonikq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Github className="w-8 h-8" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/furkan-ayhan-78776b27a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>
                        <a
                            href="#"
                            className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Mail className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;
