"use client"
import Link from "next/link"
import DarkModeButton from "./DarkModeButton";
import { useState } from "react";

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

  
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="text-4xl font-black ">
                    <span className="logo">{`<\\>`}</span>
                </div>
                <div className="flex absolute items-center font-medium space-x-8 right-0 me-28">
                    <div className="lg:flex hidden items-center space-x-8">
                        <Link href="/about" >About</Link>
                        <Link href="/" >Projects</Link>
                        <Link href="/" >Contact</Link>
                        <div className="border border-slate-900/10 dark:border-slate-300/10 h-8 "></div>
                    </div>
                    <DarkModeButton />
                    <button onClick={handleClick}>
                        <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                        <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded ${isOpen ? '-rotate-45 -translate-y-2 ' : 'translate-y-0.5'}`} ></span>
                    </button>
                </div>
            </nav>
        
            <div className="">
                <div>
                    <Link href="/about" >About</Link>
                </div>
                <div>
                    <Link href="/" >Projects</Link>
                </div>
                 <div>
                    <Link href="/" >Contact</Link>
                </div>        
            </div>
        </>
    )
}