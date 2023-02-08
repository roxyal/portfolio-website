"use client" // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

// NAV_ITEMS an array of objects to store the relevant NAVBAR item
const NAV_ITEMS = [
    {
        label: 'Home',
        page: 'home',
    },
    {
        label: 'About',
        page: 'about',
    },
    {
        label: 'Projects',
        page: 'projects'
    },
    {
        label: 'Experience',
        page: 'experience'
    },
];

// useTheme control the dark/light of the website
const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const [navbar, setNavBar] = useState(false);
    // Tailwindcss Style
    // what this colon (:) means is that it allows you to make an adaptive interface
    // e.g. sm: (means small screens) -> px-20
    return (
        <header className="w-full mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
            <div className="justify-between md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="home">
                            <div className="container flex items-center space-x-2">
                                <h2 className="cursor-pointer text-xl font-bold font-burtons">MY PORTFOLIO</h2>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button onClick={() => setNavBar(!navbar)}>
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30}/>}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}>
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        className={"cursor-pointer block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"}
                                        key={idx}
                                        to={item.page}
                                        spy={true}
                                        activeClass={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setNavBar(!navbar)}
                                    >
                                    {item.label}
                                    </Link>
                                )
                            })}
                            {currentTheme === "dark" ? 
                            (
                                <button onClick={() => setTheme("light")}
                                    className="bg-yellow-300 p-2 rounded-xl">
                                    <RiSunLine />
                                </button>
                            ) 
                            : 
                            (
                                <button onClick={() => setTheme("dark")}
                                    className="bg-blue-300 p-2 rounded-xl">
                                    <RiMoonFill />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Navbar;