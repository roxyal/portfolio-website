import React from "react";
import Image from "next/image";
import Link from "next/link";

const PROJECTS_ITEMS = [
    
    {
        name: 'Great Wall of Chinese',
        description: 'Great Wall of Chinese is an educational game that aims to encourage students to learn and sharpen their knowledge in Chinese',
        image: '/ssad.png',
        url: 'http://chinese.ilovefriedorc.com/'
    },

    {
        name: 'MY PORTFOLIO',
        description: 'This is a portfolio website created to showcase my relevant past projects and experiences',
        image: '/portfolio.png',
        url: 'https://kelvinwahh.vercel.app/'
    },

    {
        name: 'TO-DO',
        description: 'DashNotes is a task management platform that enables administrators to assign tasks to employees. It allows employees to efficiently manage their job tasks and track progress. This application is not deployed so the link cannot be access.',
        image: '/todo.PNG',
        url: ''
    },

    {
        name: 'SOULCLICK',
        description: 'SOULCLICK is a dating website inspired by popular apps like Tinder and Bumble. It offers a platform for users to connect and CLICK together. This application is not deployed so the link cannot be access.',
        image: '/dating.PNG',
        url: ''
    },

    {
        name: 'SOULMART',
        description: 'SOULMART is an ecommerce website that draws inspiration from platforms like Shopee and Taobao. This project was implemented to gain a deeper understanding of the mechanics behind operating an ecommerce business. This application is not deployed so the link cannot be access.',
        image: '/ecommerce.PNG',
        url: ''
    },
]

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl mb-10">
                Projects
                <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-28">
                {PROJECTS_ITEMS.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <div className="flex flex-col md:flex-row md:space-x-12 sm:space-y-5 sm:text-mx-auto">
                                <div className="md:w-1/2">
                                    <Link href={project.url} target="_blank">
                                        <Image
                                            src={project.image}
                                            alt=""
                                            width={600}
                                            height={600}
                                            className="cursor-pointer rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </Link>
                                </div>
                                <div className="mt-8 md:w-1/2">
                                    <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
                                    <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
export default Projects;
