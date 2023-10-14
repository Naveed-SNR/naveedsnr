"use client"
import Link from "next/link"
import DarkModeButton from "./DarkModeButton";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const variants = {
        open: { 
            transition: { staggerChildren: 0.07, delayChildren: 0.2 },
             x: -0 
        },
        closed: { 
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
             x: "100%" 
        },
      }

    return (
        <>
            <nav className="navbar">
                <div className="text-4xl font-black ">
                    <span className="logo">{`<\\>`}</span>
                </div>
                <div className="flex justify-center absolute items-center font-medium space-x-8 right-0 lg:me-28 me-11">
                    <div className="lg:flex hidden items-center space-x-8">
                        <Link href="/about" >About</Link>
                        <Link href="/" >Projects</Link>
                        <Link href="/" >Contact</Link>
                        <div className="border border-slate-900/10 dark:border-slate-300/10 h-8 "></div>
                        <DarkModeButton />
                    </div>
                    <button className="block lg:hidden" onClick={handleClick}>
                        <span className={`bg-black dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                        <span className={`bg-black dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-black dark:bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded ${isOpen ? '-rotate-45 -translate-y-2 ' : 'translate-y-0.5'}`} ></span>
                    </button>
                </div>
            </nav>

            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}} className={`z-21 flex justify-end backdrop-blur-sm fixed m-0 mt top-0 left-0 w-screen h-screen ${isOpen ? 'block': 'hidden'}`} onClick={handleClick}>
                <motion.div 
                    animate={isOpen ? "open" : "closed"}
                    variants={variants} className={`mt-29 p-8 m-9 z-40 fixed rounded-xl bg-transparent/90 border  border-gray-900 w-83 h-5/6 text-secondary-200 font-medium`}
                >
                    <motion.div className="p-3 text-lg">
                        <Link href="/about" >About</Link>
                    </motion.div>
                    <motion.div className="p-3 text-lg">
                        <Link href="/" >Projects</Link>
                    </motion.div>
                     <motion.div className="p-3 text-lg">
                        <Link href="/" >Contact</Link>
                    </motion.div>
                    <motion.div className="p-3">
                        <DarkModeButton />
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}