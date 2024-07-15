"use client"
import Image from "next/image.js"
import Type from "../components/Type.jsx";
import Profile from "../../../public/images/Profile.jpg"
import { motion } from "framer-motion";
import { Icon } from '@iconify/react'; 
import Link from "next/link.js";
import Tilt from 'react-parallax-tilt';

export default function Home() {
  
  return (
    <>
      <div className="home">
        <motion.div className="lg:mt-74 xl:mb-74 shrink flex lg:flex-nowrap flex-wrap-reverse items-start justify-center lg:justify-between xxl:justify-center lg:space-x-48 w-full">
          <motion.div className="lg:ps-11 lg:border-l border-cyan-300 dark:border-gray-800" initial={{opacity: 0, y: 100}} animate={{opacity: 1, y:0}} transition={{delayChildren: 1, delay: 0.21}}>
            <motion.div className="xl:text-7.4  xxl:text-9xl lg:text-3 flex justify-center lg:justify-start text-3 font-extrabold">
              <span className="my-1 text-primaryl-100 dark:text-primary-100 text-center ">Naveed SNR</span>
            </motion.div>
           <motion.div className="lg:mt-7.4 flex lg:justify-start justify-center xl:text-3 xxl:text-7.4 text-3xl text-secondaryl-200 dark:text-secondary-200 font-semibold">
              <Type />
            </motion.div>
            <motion.div className="mt-8 lg:text-start text-justify lg:max-w-2xl xxl:max-w-3xl max-w-md text-secondaryl-100/83 dark:text-secondary-100  xl:text-2xl xxl:text-4xl text-xl flex justify-center leading-relaxed">I specialize in creating excellent designs, modern websites, professional photo editing & more!
            </motion.div>
            <div className="xl:-mx-3 mt-11 flex lg:justify-start justify-center items-center gap-4">
          <div className="p-3 dark:bg-zinc-950 bg-primary-100/30 glow border border-secondary-100/30 rounded-full">
            <Link href="https://github.com/Naveed-SNR">
              <Icon icon="uil:github" className="dark:text-primary-100/92 text-primaryl-100 xl:text-4xl text-3xl" />
            </Link>
          </div>
          <div className="p-3 dark:bg-zinc-950 bg-primary-100/30 glow border border-secondary-100/30 rounded-full">
            <Link href="https://www.linkedin.com/in/naveedsnr/">
              <Icon icon="mdi:linkedin" className="dark:text-primary-100/92 text-primaryl-100 xl:text-4xl text-3xl" />
            </Link>
          </div>
          <div className="p-3 dark:bg-zinc-950 bg-primary-100/30 glow border border-secondary-100/30 rounded-full">
            <Link href="https://x.com/naveed_snr">
              <Icon icon="simple-icons:x" className="dark:text-primary-100/92 text-primaryl-100 xl:text-4xl text-3xl" />
            </Link>
          </div>
          <div className="p-3 dark:bg-zinc-950 bg-primary-100/30 glow border border-secondary-100/30 rounded-full">
            <Link href="https://www.instagram.com/naveed.snr/">
              <Icon icon="mdi:instagram" className="dark:text-primary-100/92 text-primaryl-100 xl:text-4xl text-3xl" />
            </Link>
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
