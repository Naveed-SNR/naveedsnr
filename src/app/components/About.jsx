"use client"
import React from "react";
import { useRef } from "react";
import { useTheme } from "next-themes";
import Type2 from "../components/Type2.jsx";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion"
import { FaFigma } from "react-icons/fa";
import { Icon } from '@iconify/react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import Profile from "../../../public/images/Profile.jpg";
import Image from "next/image";

const explicitTheme = {
  light: ['#A6E7FF', '#00eaff', '#566dfc', '#4059f7', '#2a45f5'],
  dark: ['#083344', '#164e63', '#155e75', '#0e7490', '#0891b2'],
};


// Shape of `labels` property (default values).
// All properties are optional.
const labels = {
  totalCount: '{{count}} contributions in {{year}}',
  legend: {
    less: 'Less',
    more: 'More',
  },
};



export default function About() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  const { theme } = useTheme();
  return (

    <div id="about" className="about">

      <motion.div style={{ opacity: isInView ? 1 : 0 }} ref={ref} className="xl:p-11 p-4 flex flex-wrap justify-center items-start bg-cyan-200 dark:bg-gray-950 w-full relative rounded-md">

        <div className="w-full justify-self-center self-center text-center p-11">
          <div className="text-primaryl-100 dark:text-primary-100 text-4xl font-bold">About</div>
          <div className="p-4 text-secondaryl-200 dark:text-secondary-100 text-xl">Here's a little about myself</div>
        </div>
        {/* Profile */}
        {/* <div className="mb-8 flex flex-wrap justify-center items-start gap-4">
            <div className="mt-2">
              <Image
                className="rounded"
                alt="profile"
                src={Profile}
                width={128}
                height={128}
                objectFit="cover"
              />
            </div>
            <div className="my-3 flex flex-wrap lg:justify-start justify-center items-start text-secondary-100 gap-3 max-w-xs">
              <div className="text-3xl lg:text-4xl font-semibold  ">
                <span className="text-center">Naveed SNR</span>
              </div>
                <div>
                  <p className="text-secondary-200 font-medium lg:text-lg text-base">Designer | Developer </p>
                </div>
                <div className="flex flex-row flex-nowrap gap-3 text-xl text-secondary-200">
                  <FaEnvelope /><FaGithub /><FaLinkedin /><FaPhoneAlt /><FaInstagram />
                </div>
            </div>
          </div> */}
        {/* Bio */}

        <div className="w-full my-3 border-l border-cyan-300 dark:border-secondary-100/30 text-secondaryl-200 dark:text-secondary-100">
          <div className="ms-4">
            <h1 className="lg:text-4xl text-3xl font-semibold">Bio</h1>
            <div className="mt-3 text-secondaryl-100/83 dark:text-secondary-200 text-justify text-lg font-medium">
              <Type2 />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-11 flex lg:flex-nowrap flex-wrap md:flex-nowrap gap-4 justify-center justify-items-strech">
        {/* Skills */}
        <div className="px-14 w-full flex sm:flex-wrap justify-center align-middle bg-cyan-200 dark:bg-slate-950 p-11 rounded-md shrink">
          <div className="text-secondaryl-200 dark:text-secondary-200">
            <h1 className="lg:text-3xl text-2xl font-semibold">Skills</h1>
            <div className=" mt-8 text-secondaryl-200 dark:text-secondary-200">
              <ul className="font-medium list-disc">
                <li className="my-8 ms-4 text-xl">
                  AI/ML
                  <ul>
                    <li className="text-secondaryl-100/83 dark:text-secondary-100 /83font-regular ms-3 list-circle lg:text-md text-base">Proficiency in technologies libaries like pytorch, tensorflow and tools like Anaconda and Jupyter notebooks </li>
                  </ul>
                </li>
                <li className="my-8 ms-4 text-xl">
                  Full stack development
                  <ul>
                    <li className="text-secondaryl-100/83 dark:text-secondary-100 font-regular ms-3 list-circle lg:text-md text-base">Knowledge about latest technologies like Next.js, React, Express.js, Tailwindcss and more </li>
                  </ul>
                </li>
                <li className="my-8 ms-4 text-xl">
                  UI/UX Design
                  <ul>
                    <li className="text-secondaryl-100/83 dark:text-secondary-100 font-regular ms-3 list-circle lg:text-md text-base">Stellar designing skills & mastery in tools like Figma, Adobe Suite, Blender</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Technologies */}
        <div className="px-14 w-full flex flex-wrap justify-center align-middle bg-cyan-200 dark:bg-slate-950 p-11 rounded-md">
          <div className="">
            <h1 className="lg:text-3xl text-2xl text-secondaryl-200 border-cyan-300 dark:dark:text-secondary-200 font-semibold">Technologies</h1>
            <div className="">
              <div className="mt-11 flex justify-center items-center flex-wrap lg:gap-3 gap-1 max-w-sm text-secondaryl-100/83 dark:text-secondary-200">
                <div className="flex justify-center items-center xl:p-7.4 p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="nonicons:next-16" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex justify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="mdi:firebase" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex justify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="simple-icons:adobephotoshop" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex ustify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="simple-icons:react" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex justify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="solar:figma-bold" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex justify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="akar-icons:html-fill" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex ustify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="akar-icons:css-fill" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex justify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="akar-icons:javascript-fill" className="xl:text-4xl text-3xl" />
                </div>
                <div className="flex justify-center items-center xl:p-7.4  p-4 rounded-md border border-cyan-400 dark:border-secondary-100">
                  <Icon icon="bytesize:github" className="xl:text-4xl text-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* GitHub Contributions Graph */}
      {/* https://grubersjoe.github.io/react-activity-calendar/?path=/docs/react-activity-calendar--docs */}
      <div className="flex flex-wrap shrink my-11 pt-3 p-3">
        <div className=" mb-11">
          <GitHubCalendar
            className="flex shrink"
            username={`Naveed-SNR`}
            labels={labels}
            theme={explicitTheme}
            colorScheme={theme === 'dark' ? 'dark' : 'light'}
            fontSize={18.2}
            blockSize={18.2}
            blockRadius={2}
            hideColorLegend={true}

            showWeekdayLabels={false}
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                'data-tooltip-id': 'react-tooltip',
                'data-tooltip-html': `${activity.count} Contributions on ${activity.date}`,
              })
            }
          />
        </div>
        <div className="flex shrink gap-1 items-center">
          <div>Less</div>
          <div className="bg-primaryl-200 dark:bg-cyan-700 w-3 h-3 rounded-sm"></div>
          <div className="bg-primary-100 dark:bg-cyan-950 w-3 h-3 rounded-sm"></div>
          <div className="bg-secondaryl-100 dark:bg-cyan-950 w-3 h-3 rounded-sm"></div>
          <div className="bg-secondaryl-200 dark:bg-cyan-800 w-3 h-3 rounded-sm"></div>
          <div className="bg-primaryl-111 dark:bg-cyan-600 w-3 h-3 rounded-sm"></div>
          <div>More</div>
        </div>

        <ReactTooltip style={{ color: '#00eaff', background: 'black' }} id="react-tooltip" />
      </div>
    </div>
  );
}