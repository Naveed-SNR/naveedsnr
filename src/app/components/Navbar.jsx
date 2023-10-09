import Link from "next/link"
import DarkModeButton from "./DarkModeButton";

export default function Navbar () {
    return (
        <>
            <nav className="navbar">
                <div className="text-4xl font-black ">
                    <span>{`<\\>`}</span>
                </div>
                <div className="flex absolute items-center font-medium space-x-8 right-0 me-28">
                    <Link href="/about" >About</Link>
                    <Link href="/" >Projects</Link>
                    <Link href="/" >Contact</Link>
                    <div className="border border-slate-900/10 dark:border-slate-300/10 h-8 "></div>
                    <DarkModeButton />
                </div>
            </nav>
        </>
    )
}