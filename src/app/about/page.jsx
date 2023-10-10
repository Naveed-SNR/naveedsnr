"use client"
import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

import { FaFigma } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import Profile from "../../../public/images/Profile.jpg";
import Image from "next/image";

const explicitTheme = {
  light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
  dark: ['#083344', '#164e63', '#155e75', '#0e7490', '#0891b2'],
};

export default function About() {
  return (
    <div className="about">
      <div className="flex sm:flex-wrap shrink justify-center align-middle bg-cyan-950 dark:bg-gray-900 w-full relative rounded-md">
        <div className="p-8 flex flex-wrap shrink align-middle">
          {/* Profile */}
          <div className="flex justify-center align-middle shrink">
            <AccountCircle className="text-primary text-8xl" />
            <div className="flex justify-center shrink text-secondary-100 mb-11">
              <div className="lg:text-3xl text-2xl ms-4 grid-rows-1 min-w-max">
                Naveed SNR
                <p className="mt-2 text-secondary-200 text-sm">Designer | Developer</p>
                <div className="flex flex-row flex-nowrap gap-3 mt-3 text-base text-secondary-200">
                  <FaEnvelope /><FaGithub /><FaLinkedin /><FaPhoneAlt /><FaInstagram />
                </div>
              </div>
            </div>
          </div>
          {/* Bio */}
          <div className="border-l border-cyan-800 lg:ms-8 mx-4 text-secondary-100">
            <div className="ms-4">
              <h1 className="lg:text-3xl text-2xl">Bio</h1>
              <div className="max-w-2xl mt-3 text-secondary-200 text-justify">I'm a driven computer science student with a passion for software development. Currently pursuing a Bachelor's degree in Computer Science, I specialize in web technologies including HTML, CSS, JavaScript, React, and Next.js. Proficient in Photoshop for digital media and photo editing. Outside of my studies, I enjoy gaming and football.</div>
            </div>
          </div>
        </div>
      </div>

      
        <div className="mt-11 flex flex-wrap gap-4 justify-center shrink align-middle">
          {/* Skills */}
          <div className="flex flex-wrap justify-center align-middle max-w-3xl bg-cyan-950 dark:bg-gray-900 p-11 rounded-md shrink">
          <div className="mx-4 text-secondary-100">
                <h1 className="lg:text-3xl text-2xl">Skills</h1>
                <div className=" mt-8 text-secondary-200 text-justify">
                    <ul className="list-disc">
                      <li className="my-3 ms-4 text-xl">
                          Web Development
                          <ul>
                              <li className="ms-3 list-circle text-sm">Proficiency in various technologies such as React, Next.js </li>
                          </ul>
                      </li>
                      <li className="my-3 ms-4 text-xl">
                          Digital Media
                          <ul>
                              <li className="ms-3 list-circle text-sm">Excellent knowledge of technologies like Adboe Suite</li>
                          </ul>
                      </li>
                      <li className="my-3 ms-4 text-xl">
                          Design
                          <ul>
                              <li className="ms-3 list-circle text-sm">Great design choices and mastery in design tools like Figma & Adobe XD</li>
                          </ul>
                      </li>
                    </ul>
                </div> 
            </div>
          </div>
          {/* Technologies */}
          <div className="flex flex-wrap justify-center align-middle max-w-3xl bg-cyan-950 dark:bg-gray-900 p-11 rounded-md shrink">
          <div className="">
                <h1 className="lg:text-3xl text-2xl">Technologies</h1>
                <div className="mt-8 flex justify-center flex-wrap gap-3 max-w-lg text-secondary-200">
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>
                    <div className="flex justify-center align-middle p-8 rounded-md border border-slate-700">
                        <FaFigma className="text-4xl"/>
                    </div>   
                </div>
              </div>
          </div>
        </div>


      {/* GitHub Contributions Graph */}
      <div className="flex flex-wrap shrink my-11 p-3">
        <GitHubCalendar
          username={`Naveed-SNR`}
          colorScheme="dark"
          theme={explicitTheme}
          fontSize={18.2}
          blockSize={21}
          blockRadius={2}
          showWeekdayLabels={true}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              'data-tooltip-id': 'react-tooltip',
              'data-tooltip-html': `${activity.count} Contributions on ${activity.date}`,
            })
          }
        />
        <ReactTooltip style={{ color: '#00eaff', background: 'black' }} id="react-tooltip" />
      </div>
    </div>
  );
}
