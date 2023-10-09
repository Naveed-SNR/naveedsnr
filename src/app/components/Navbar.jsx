import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/vercel.svg";
import DarkModeButton from "./DarkModeButton";
export default function Navbar () {
    return (
        <>
            <nav className="navbar items-center">
                <Image
                src={logo}
                width={100}
                height={54}
                />
                <div className="flex absolute font-medium space-x-8 right-0 me-8">
                    <Link href="/" >About</Link>
                    <Link href="/" >Projects</Link>
                    <Link href="/" >Contact</Link>
                    <DarkModeButton />
                </div>
            </nav>
        </>
    )
}