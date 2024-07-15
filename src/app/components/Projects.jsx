"use client"
import React from 'react'
import Image from 'next/image'
import one from "../../../public/images/1.png";
import fallstreak from "../../../public/images/fallstreak.png";
import Tilt from 'react-parallax-tilt';
export default function Projects() {
  return (
    <div id="projects" className="projects py-11 my-30 border border-cyan-300 dark:border-slate-300/11 rounded-lg ">
      <div className="text-center p-11">
        <div className="text-primaryl-100 dark:text-primary-100 text-4xl font-bold">Projects</div>
        <div className="p-4 text-secondaryl-200 dark:text-secondary-100 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, corporis voluptas?</div>
      </div>
      <div className="mt-4 w-full flex flex-wrap justify-center items-center gap-11">
      {/*cards*/}
        <Tilt tiltMaxAngleX={3.8} tiltMaxAngleY={3.8}>
          <div className="w-96 p-3 rounded-lg border-2 border-primaryl-100 dark:border-secondary-100/30 bg-cyan-200 dark:bg-slate-950">
              <div>
                <Image
                  src={one}
                  alt="Project Image"
                  objectFit="cover"
                  className="w-full h-full rounded-md border-2 border-primaryl-111 dark:border-secondary-100/21"
                />
              </div>
              <div className="text-center mt-3 p-4">
                <div className="text-primaryl-100 dark:text-secondary-200 font-semibold text-2xl">College IO</div>
                <div className="my-3.8 font-medium text-md text-secondaryl-100 dark:text-secondary-100">First-person virtual tour with physics using three js and three-mesh-bvh
                </div>
                <div className="flex flex-wrap mt-3 gap-3 justify-center w-full">
                  <button className="bg-primaryl-100 dark:bg-primary-100/83 w-5/12 py-2 px-3 rounded-lg font-semibold text-primary-100 dark:text-black button-animation glow-subtle">Demo</button>
                  <button className="bg-primaryl-100 dark:bg-primary-100/83 w-5/12 py-2 px-3 rounded-lg font-semibold text-primary-100 dark:text-black button-animation glow-subtle">Source code</button>
                </div>
              </div>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={3.8} tiltMaxAngleY={3.8}>
          <div className="w-96 p-3 rounded-lg border-2 border-primaryl-100 dark:border-secondary-100/30 bg-cyan-200 dark:bg-slate-950">
              <div>
                <Image
                  src={fallstreak}
                  alt="Project Image"
                  objectFit="cover"
                  className="w-full h-full rounded-md border-2 border-primaryl-111 dark:border-secondary-100/21"
                />
              </div>
              <div className="text-center mt-3 p-4">
                <div className="text-primaryl-100 dark:text-secondary-200 font-semibold text-2xl">Fall Streak</div>
                <div className="my-3.8 font-medium text-md text-secondaryl-100 dark:text-secondary-100">Travel website built using Next.js, Firebase and Stripe (for payments)
                </div>
                <div className="flex flex-wrap mt-3 gap-3 justify-center w-full">
                  <button className="bg-primaryl-100 dark:bg-primary-100/83 w-5/12 py-2 px-3 rounded-lg font-semibold text-primary-100 dark:text-black button-animation glow-subtle">Demo</button>
                  <button className="bg-primaryl-100 dark:bg-primary-100/83 w-5/12 py-2 px-3 rounded-lg font-semibold text-primary-100 dark:text-black button-animation glow-subtle">Source code</button>
                </div>
              </div>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={3.8} tiltMaxAngleY={3.8}>
          <div className="w-96 p-3 rounded-lg border-2 border-primaryl-100 dark:border-secondary-100/30 bg-cyan-200 dark:bg-slate-950">
              <div>
                <Image
                  src={one}
                  alt="Project Image"
                  objectFit="cover"
                  className="w-full h-full rounded-md border-2 border-primaryl-111 dark:border-secondary-100/21"
                />
              </div>
              <div className="text-center mt-3 p-4">
                <div className="text-primaryl-100 dark:text-secondary-200 font-semibold text-2xl">College IO</div>
                <div className="my-3.8 font-medium text-md text-secondaryl-100 dark:text-secondary-100">First-person virtual tour with physics using three js and three-mesh-bvh
                </div>
                <div className="flex flex-wrap mt-3 gap-3 justify-center w-full">
                  <button className="bg-primaryl-100 dark:bg-primary-100/83 w-5/12 py-2 px-3 rounded-lg font-semibold text-primary-100 dark:text-black button-animation glow-subtle">Demo</button>
                  <button className="bg-primaryl-100 dark:bg-primary-100/83 w-5/12 py-2 px-3 rounded-lg font-semibold text-primary-100 dark:text-black button-animation glow-subtle">Source code</button>
                </div>
              </div>
          </div>
        </Tilt>



      </div>
    </div>

  )
}
