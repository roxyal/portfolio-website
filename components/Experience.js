import React from "react";
import Image from "next/image";

const EXPERIENCE_ITEMS = [
    {
        company: 'DSO National Laboratories',
        role: 'Software Engineer (AI/ML)',
        date: 'Aug 2021 - Dec 2021',
        logo: '/dso.png',
        job_type: 'Internship'
    },
]

const Experience = () => {
    return (
        <section id="experience">
            <h1 className="py-10 text-center font-bold text-4xl mb-10">
                Experience
                <hr className="w-20 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className="flex flex-col space-y-28">
                {EXPERIENCE_ITEMS.map((experience, idx) => {
                    return (
                        <div key={idx}>
                            <div className="flex flex-col md:flex-row md:space-x-12 sm:space-y-5 sm:text-mx-auto">
                                <div className="md:w-1/2">
                                    <Image
                                        src={experience.logo}
                                        alt=""
                                        width={200}
                                        height={200}
                                        className="rounded-xl shadow-xl"
                                    />
                                </div>
                                <div className="mt-8 md:w-1/2"> 
                                    <h1 className="text-3xl font-bold mb-6">{experience.role}</h1>
                                    <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        <h2>{experience.company} {experience.job_type}/</h2>
                                        <h2 className="mb-5">{experience.date}</h2>
                                        <ul className="space-y-5 text-base">
                                            <li>
                                                • Researched on and build a multi-agent environment (stimulation) using Unity as well as Pygame
                                            </li>
                                            <li>
                                                • Build different scenarios of the environment, from easy to complex environment to stimulate real time environment
                                            </li>
                                            <li>
                                                • Implemented and integrated the environment and trained it using reinforcement learning algorithms, UnityML and QMIX. Developed self-learning agents that are capable of achieving the goals/targets on its own.
                                            </li>
                                            <li>
                                                • Wrote a Python automation script that can run the multi-agent environment.
                                            </li>
                                            <li>
                                                • Created a user manual so that others can know how to leverage and use the tools
                                            </li> 
                                        </ul>
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
export default Experience;