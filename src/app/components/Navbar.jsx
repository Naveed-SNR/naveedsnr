"use client"
import Link from "next/link"
import DarkModeButton from "./DarkModeButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { duration } from "@mui/material";



export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false);
    const [navbg, setNavbg] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
        

            const changeNavBg = () => {
                if (window.scrollY >= 92) {
                    setNavbg(true);
                } else {
                    setNavbg(false);
                }
            };

            window.addEventListener('scroll', changeNavBg);

            return () => {
                window.removeEventListener('scroll', changeNavBg);
            };
        }
    }, []);


  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const variants = {
        open: { 
            transition: { staggerChildren: 0.092, delayChildren: 0.03, type: "spring", stiffness: 83,   duration: 0.01},
             x: 0 ,
    
        },
        closed: { 
            transition: { staggerChildren: 0.03, staggerDirection: -1 },
             x: "100%" 
        },
      }

    return (
        <>
 
            <motion.nav initial={{opacity: 0, y:-100}} animate={{opacity: 1, y:0}} transition={{delay: 0.03, duration: 0.011,  type: "spring", stiffness: 128}} className={navbg ? 'navbar nav-bg' : 'navbar'}>
                <div className="hover:scale-38 text-4xl font-black duration-100">
                    <Link href="/">
                        <span className="logo">{`<\\>`}</span>
                    </Link>
                </div>
                <div className="flex justify-center absolute items-center font-medium space-x-8 right-0 lg:me-28 me-11 dark:text-secondary-100 text-secondaryl-100/83">
                    <div className="lg:flex hidden items-center space-x-8">
                        <Link href="/#about" >About</Link>
                        <Link href="/#projects" >Projects</Link>
                        <Link href="/#contact" >Contact</Link>
                        <div className="border border-cyan-300 dark:border-slate-300/11 h-8 "></div>
                        <DarkModeButton />
                    </div>
                    {/* Hamburger Menu Button */}
                </div>
                    <button className="block lg:hidden" onClick={handleClick}>
                        <span className={`bg-black dark:bg-primary-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                        <span className={`bg-black dark:bg-primary-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-black dark:bg-primary-100 block transition-all duration-300 ease-out h-0.5 w-6 rounded ${isOpen ? '-rotate-45 -translate-y-2 ' : 'translate-y-0.5'}`} ></span>
                    </button>
            </motion.nav>

            {/*Sidebar*/}
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.021}} className={`z-21 flex justify-end backdrop-blur-sm fixed m-0 ms-2.1 top-0 left-0 w-screen h-screen ${isOpen ? 'block': 'hidden'}`} onClick={handleClick}>
                <motion.div 
                    animate={isOpen ? "open" : "closed"}
                    variants={variants} className={`mt-14 p-8 z-40 fixed rounded-xl bg-cyan-100 dark:bg-black border dark:text-secondary-100 text-secondaryl-100/83 border-primaryl-100/30 dark:border-secondary-100/30 w-full h-screen
                         text-secondary-200 font-medium`}
                >
                    <motion.div variants={variants} className="p-3 text-lg">
                        <Link href="/#about" >About</Link>
                    </motion.div>
                    <motion.div variants={variants} className="p-3 text-lg">
                        <Link href="/#projects" >Projects</Link>
                    </motion.div>
                     <motion.div variants={variants} className="p-3 text-lg">
                        <Link href="/#contact" >Contact</Link>
                    </motion.div>
                    <motion.div variants={variants} className="p-3">
                        <DarkModeButton />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}