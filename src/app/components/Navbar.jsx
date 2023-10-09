import Link from "next/link"
import DarkModeButton from "./DarkModeButton";

export default function Navbar () {
    return (
        <>
            <nav className="navbar">
                <div className="text-4xl font-black ms-11">
                    <span>{`<\\>`}</span>
                </div>
                <div className="flex absolute items-center font-medium space-x-8 right-0 me-28">
                    <Link href="/" >About</Link>
                    <Link href="/" >Projects</Link>
                    <Link href="/" >Contact</Link>
                    <DarkModeButton />
                </div>
            </nav>
        </>
    )
}