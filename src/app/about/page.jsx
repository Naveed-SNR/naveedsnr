"use client"
import React from "react";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

import { FaFigma } from "react-icons/fa";
import { Icon } from '@iconify/react'; 
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import Profile from "../../../public/images/Profile.jpg";
import Image from "next/image";

const explicitTheme = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
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
  return (
    <div className="about">
      <div className="lg:p-11 p-4 flex flex-wrap  justify-start items-start bg-cyan-950 dark:bg-gray-950 w-full relative rounded-md">
          {/* Profile */}
          <div className="mb-8 flex flex-wrap justify-center items-start gap-4">
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
          </div>
          {/* Bio */}
          <div className="my-3 border-l border-cyan-800 text-secondary-100">
            <div className="ms-4">
              <h1 className="lg:text-4xl text-3xl font-semibold">Bio</h1>
              <div className="max-w-2xl mt-3 text-secondary-200 text-justify text-lg font-medium">I'm a driven computer science student with a passion for software development. Currently pursuing a Bachelor's degree in Computer Science, I specialize in web technologies including HTML, CSS, JavaScript, React, and Next.js. Proficient in Photoshop for digital media and photo editing. Outside of my studies, I enjoy gaming and football.</div>
            </div>
          </div>
        
      </div>

      
      <div className="mt-11 flex flex-wrap md:flex-nowrap gap-4 justify-center justify-items-strech">
          {/* Skills */}
          <div className="px-14 flex sm:flex-wrap justify-center align-middle max-w-4xl md:max-w-2xl sm:max-w-lg bg-cyan-950 dark:bg-gray-950 p-11 rounded-md shrink">
          <div className=" text-secondary-200">
                <h1 className="lg:text-3xl text-2xl font-semibold">Skills</h1>
                <div className=" mt-8 text-secondary-200">
                    <ul className="font-medium list-disc">
                      <li className="my-8 ms-4 text-xl">
                          Web Development
                          <ul>
                              <li className="font-regular ms-3 list-circle lg:text-md text-base">Proficiency in various technologies such as React, Next.js </li>
                          </ul>
                      </li>
                      <li className="my-8 ms-4 text-xl">
                          Digital Media
                          <ul>
                              <li className="font-regular ms-3 list-circle lg:text-md text-base">Excellent knowledge of technologies like Adboe Suite</li>
                          </ul>
                      </li>
                      <li className="my-8 ms-4 text-xl">
                          Design
                          <ul>
                              <li className="font-regular ms-3 list-circle lg:text-md text-base">Stellar designing skills & mastery in tools like Figma & Adobe XD</li>
                          </ul>
                      </li>
                    </ul>
                </div> 
            </div>
          </div>
          {/* Technologies */}
          <div className="px-14 flex flex-wrap justify-center align-middle max-w-4xl md:max-w-2xl sm:max-w-lg bg-cyan-950 dark:bg-gray-950 p-11 rounded-md shrink">
          <div className="">
                <h1 className="lg:text-3xl text-2xl text-secondary-200 font-semibold">Technologies</h1>
                <div className="mt-11 flex justify-center align-middle flex-wrap lg:gap-3 gap-8 max-w-lg text-secondary-200">
                    <div className="flex justify-center align-middle lg:p-8 p-4 rounded-md border border-slate-700">
                      <Icon icon="nonicons:next-16" className="lg:text-4xl text-2xl" />
                    </div>
                    <div className="flex justify-center align-middle lg:p-8  p-4 rounded-md border border-slate-700">
                      <Icon icon="mdi:firebase" className="lg:text-4xl text-2xl" />
                    </div>
                    <div className="flex justify-center align-middle lg:p-8  p-4 rounded-md border border-slate-700">
                      <Icon icon="simple-icons:adobephotoshop" className="lg:text-4xl text-2xl" />
                    </div>
                    <div className="flex justify-center align-middle lg:p-8  p-4 rounded-md border border-slate-700">
                      <Icon icon="simple-icons:react" className="lg:text-4xl text-2xl" />
                    </div>
                    <div className="flex justify-center align-middle lg:p-8  p-4 rounded-md border border-slate-700">
                      <Icon icon="solar:figma-bold" className="lg:text-4xl text-2xl" />
                    </div>
                    <div className="flex justify-center align-middle lg:p-8  p-4 rounded-md border border-slate-700">
                      <Icon icon="akar-icons:html-fill" className="lg:text-4xl text-2xl" />
                    </div>
                    <div className="flex justify-center align-middle lg:p-8  p-4 rounded-md border border-slate-700">
                      <Icon icon="akar-icons:css-fill" className="lg:text-4xl text-2xl" />
                    </div>
                    <div className="flex justify-center align-middle lg:p-8  p-4 rounded-md border border-slate-700">
                      <Icon icon="akar-icons:javascript-fill" className="lg:text-4xl text-2xl" />
                    </div>   
                </div>
              </div>
          </div>
        </div>


      {/* GitHub Contributions Graph */}
      <div className="flex flex-wrap shrink my-11 pt-3 p-3">
        <GitHubCalendar
          className="flex shrink"
          username={`Naveed-SNR`}
          colorScheme="dark"
          theme={explicitTheme}
          fontSize={18.2}
          blockSize={21}
          blockRadius={2}
          hideColorLegend={true}
          hideTotalCount={true}
          showWeekdayLabels={true}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              'data-tooltip-id': 'react-tooltip',
              'data-tooltip-html': `${activity.count} Contributions on ${activity.date}`,
            })
          }
        />
        <ReactTooltip style={{ color: '#00eaff', background: 'black' }} id="react-tooltip" />
        
          <div className="flex shrink justify-between items-center w-screen ">
            <div className="mb-11">
              <GitHubCalendar
                className ="shrink"
                username={`Naveed-SNR`}
                colorScheme="dark"
                theme={explicitTheme}
                labels={labels}
                blockSize={0}
                hideMonthLabels={true}
                hideColorLegend={true}
              />
            </div>
            <div className="flex shrink gap-1 items-center">
              <div>Less</div>
              <div className="bg-cyan-950 w-3 h-3 rounded-sm"></div>
              <div className="bg-cyan-950 w-3 h-3 rounded-sm"></div>
              <div className="bg-cyan-800 w-3 h-3 rounded-sm"></div>
              <div className="bg-cyan-700 w-3 h-3 rounded-sm"></div>
              <div className="bg-cyan-600 w-3 h-3 rounded-sm"></div>
              <div>More</div>
          </div>
          </div>


      </div>
    </div>
  );
}