"use client"
import Image from "next/image.js"
import Type from "./components/Type.jsx"
import Profile from "../../public/images/Profile.jpg"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt';

export default function Home() {
  
  return (
    <>
      <div className="home">
        <div className="lg:mt-74 shrink flex lg:flex-nowrap flex-wrap-reverse items-center lg:justify-between justify-center lg:space-x-48 w-full lg:border-l border-gray-800">
          <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y:0}} transition={{delayChildren: 1}} className="mt-11 lg:ms-11">
            <motion.div className="lg:text-8xl flex justify-start text-3 font-extrabold">
              <span className=" text-primary-100 text-center ">Naveed SNR</span>
            </motion.div>
           <motion.div className="lg:mt-8 flex lg:justify-start justify-center lg:text-type md:text-4xl text-3xl text-secondary-200 font-semibold">
              <Type />
            </motion.div>
            <motion.div className="mt-8 lg:text-start text-justify lg:max-w-xl max-w-md text-secondary-100  lg:text-2xl text-xl flex justify-center leading-relaxed">I specialize in creating excellent designs, modern websites, professional photo editing and you name it!
            </motion.div>
          </motion.div>
            <motion.div initial={{x:100}} animate={{x:0}} className="lg:relative lg:right-0">
            <Tilt>
              <Image
                className="rounded-md"
                alt="profile"
                src={Profile}
                width={400}
                height={400}
                />
              </Tilt>
             </motion.div>
        </div>
      </div>

    </>
  )
}
