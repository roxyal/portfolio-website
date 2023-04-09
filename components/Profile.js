import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from "react-icons/hi";
 
const Profile = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-25 md:py-35 md:flex-row md:space-x-4 md:text-left">
                <div className="md:w-1/2 md:mt-2"> 
                    <Image className="rounded-full shadow-2xl" src="/profile.jpg" alt="profile" height={300} width={300} />
                </div>
                <div className="md:w-3/5 md:mt-2">
                    <h1 className="text-3xl py-5 font-bold md:text-4xl">Hi, I&#39;m Kelvin!</h1>
                    <p className="text-1xl mt-4 mb-10">
                        Software Enginer | Passionate about techs | Keen in learning new stuff!
                    </p>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-indigo-600 rounded shadow hover:bg-green-600 cursor-pointer"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        Projects
                    </Link>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center text-center">
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className="cursor-pointer animate-bounce" />
                </Link>
            </div>
        </section>
    )
}
export default Profile;
