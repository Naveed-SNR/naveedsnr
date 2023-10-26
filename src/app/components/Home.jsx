"use client"
import Image from "next/image.js"
import Type from "../components/Type.jsx";
import Profile from "../../../public/images/Profile.jpg"
import { motion } from "framer-motion"
import { Icon } from '@iconify/react'; 
import Tilt from 'react-parallax-tilt';

export default function Home() {
  
  return (
    <>
      <div className="home h-screen">
        <motion.div className="lg:mt-40 shrink flex lg:flex-nowrap flex-wrap-reverse items-start justify-center lg:justify-between xxl:justify-center lg:space-x-48 w-full lg:border-l border-gray-800">
          <motion.div className="lg:ms-11" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y:0}} transition={{delayChildren: 1, delay: 0.21}}>
            <motion.div className="xl:text-7.4  xxl:text-9xl lg:text-3 flex justify-center lg:justify-start text-3 font-extrabold">
              <span className="my-1 text-primary-100 text-center ">Naveed SNR</span>
            </motion.div>
           <motion.div className="lg:mt-7.4 flex lg:justify-start justify-center xl:text-3 xxl:text-7.4 text-3xl text-secondary-200 font-semibold">
              <Type />
            </motion.div>
            <motion.div className="mt-8 lg:text-start text-justify lg:max-w-2xl xxl:max-w-3xl max-w-md text-secondary-100  xl:text-2xl xxl:text-4xl text-xl flex justify-center leading-relaxed">I specialize in creating excellent designs, modern websites, professional photo editing & more!
            </motion.div>
            <div className="xl:-mx-3 mt-11 flex lg:justify-start justify-center items-center gap-4">
          <div className="p-3 bg-zinc-950 border border-secondary-100/30 rounded-full">
            <Icon icon="uil:github" className="text-primary-100/83 xl:text-4xl text-3xl" />
          </div>
          <div className="p-3 bg-zinc-950 border border-secondary-100/30 rounded-full">
            <Icon icon="mdi:linkedin" className="text-primary-100/83 xl:text-4xl text-3xl" />
          </div>
          <div className="p-3 bg-zinc-950 border border-secondary-100/30 rounded-full">
            <Icon icon="simple-icons:x" className="text-primary-100/83 xl:text-4xl text-3xl" />
          </div>
          <div className="p-3 bg-zinc-950 border border-secondary-100/30 rounded-full">
            <Icon icon="mdi:instagram" className="text-primary-100/83 xl:text-4xl text-3xl" />
          </div>
        </div>
            </motion.div>
            <motion.div className="xl:relative xl:right-0" initial={{x:100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{delayChildren: 1, delay: 0.021}}>
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
        </motion.div>

      </div>

    </>
  )
}
