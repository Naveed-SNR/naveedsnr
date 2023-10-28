"use client"
import React from 'react';
import { Icon } from '@iconify/react';

export default function Form() {
  return (
    <div className="p-11 rounded-lg items-center min-h-screen bg-slate-950">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-primary-100">
          Contact Us
        </h1>
        <p className="text-secondary-200 dark:text-secondary-200">
          Let's get in touch
        </p>
      </div>
      <div>
        <div className="p-3 flex flex-wrap justify-center items-center w-full">
          <div className="max-w-xl w-full my-11 rounded-lg shadow-sm">
            <div className="m-8">
              <h1 className="my-4 text-2xl font-medium text-secondary-200">
                Message me
              </h1>
              <form action="https://api.web3forms.com/submit" method="POST" id="form">
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    required
                    className="w-full px-3 py-2 h-12 rounded-lg placeholder-transparent dark:text-secondary-100 bg-transparent text-sm border border-slate-900 focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                  />
                  <label htmlFor="name" className="absolute -top-1 ms-3 block bg-slate-950 px-1 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">
                    Full Name
                  </label>
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 h-12 rounded-lg placeholder-transparent dark:text-secondary-100 bg-transparent text-sm border border-slate-900 focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                  />
                  <label htmlFor="email" className="absolute -top-1 ms-3 block bg-slate-950 px-1 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">
                    Email
                  </label>
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full px-3 py-2 h-12 rounded-lg placeholder-transparent dark:text-secondary-100 bg-transparent text-sm border border-slate-900 focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                  />
                  <label htmlFor="phone" className="absolute -top-1 ms-3 block bg-slate-950 px-1 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">
                    Phone Number
                  </label>
                </div>
                <div className="relative mb-4">
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-full px-3 py-2 rounded-lg placeholder-transparent text-secondary-100 bg-transparent text-sm border border-slate-900 focus:outline-none focus:border-2 focus:border-secondary-100 peer"
                    required
                  ></textarea>
                  <label htmlFor="message" className="absolute -top-1 ms-3 block bg-slate-950 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">
                    Your Message
                  </label>
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full bg-primary-100 inline-block text-black no-underline hover-bg-primary-200 py-4 px-4 rounded-md focus:outline-none"
                  >
                    Send Message
                  </button>
                </div>
                <p className="text-base text-center text-secondary-200" id="result"></p>
              </form>
            </div>
          </div>
          <div className="max-w-xl w-full my-11 self-start rounded-lg shadow-sm">
            <div className="m-8">
              <h1 className="my-4 text-2xl font-medium text-secondary-200">
                Contact Information
              </h1>
              <div className="mt-9.2 p-9.2 border-l border-secondary-100/30">
              <div className="flex items-center mb-11">
                    <Icon icon="ic:round-email" className="text-4xl" />
                  <div>
                    <span className="ms-3 text-lg font-medium">Email</span><br/>
                    <span className="ms-3 text-base">sheikhnaveed3660@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center mb-11">
                    <Icon icon="ic:round-phone" className="text-4xl" />
                  <div>
                    <span className="ms-3 text-lg font-medium">Phone Number</span><br/>
                    <span className="ms-3 text-base">+91 7051966050</span>
                  </div>
                </div>
                <div className="flex items-center mb-11">
                    <Icon icon="ic:baseline-location-on" className="text-4xl" />
                  <div>
                    <span className="ms-3 text-lg font-medium">Location</span><br/>
                    <span className="ms-3 text-base">Srinagar, Kashmir - 190006</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
