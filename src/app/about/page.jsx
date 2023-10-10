"use client"
import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { FaEnvelope, FaGithub, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
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
      <div className="flex flex-wrap shrink justify-center align-middle bg-cyan-950 dark:bg-gray-900 w-full rounded-lg relative h-rounded-md">
        <div className="p-8 flex flex-wrap shrink align-middle">
          {/* Profile */}
          <div className="flex justify-center align-middle shrink">
            <AccountCircle className="text-primary text-8xl" />
            <div className="flex justify-center shrink text-secondary mb-11">
              <div className="lg:text-3xl text-2xl ms-4 grid-rows-1 min-w-max">
                Naveed SNR
                <p className="mt-2 text-secondary text-xs">Designer | Developer</p>
                <div className="flex flex-row flex-nowrap gap-2 mt-3 text-base">
                  <FaEnvelope /><FaGithub /><FaLinkedin /><FaPhoneAlt /><FaInstagram />
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="border-l border-cyan-800 lg:ms-8 mx-4 text-secondary">
            <div className="ms-4">
              <h1 className="lg:text-3xl text-2xl">Bio</h1>
              <div className="max-w-2xl mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aliquam quis earum distinctio, maxime facere cumque illo, tenetur est adipisci praesentium doloribus labore minus eveniet. Voluptatem commodi minus id error.</div>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Contributions Graph */}
      <div className="my-11">
        <GitHubCalendar
          username={`Naveed-SNR`}
          colorScheme="dark"
          theme={explicitTheme}
          blockSize={18.2}
          fontSize={21}
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
