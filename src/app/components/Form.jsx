import React from 'react';

export default function Form() {
  return (
    <div className="flex rounded-lg items-center min-h-screen bg-slate-950">
      <div className="p-3 flex w-full ">
        <div className="max-w-xl w-full my-11 rounded-lg shadow-sm">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-primary-100">
              Contact Us
            </h1>
            <p className="text-secondary-200 dark:text-secondary-200">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-8">
            <form action="https://api.web3forms.com/submit" method="POST" id="form">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Submission from Web3Forms" />
              <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />

              <div className="relative mb-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Email"
                  required
                  className="w-full px-3 py-2 h-12 rounded-lg placeholder-transparent dark:text-secondary-100 bg-transparent text-sm border border-slate-900 focus:outline-none focus:border-2 focus:border-secondary-100 peer transition-border"
                />
                <label htmlFor="name" className="absolute -top-1 ms-3 block bg-slate-950 px-1 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">Full Name</label>
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
                <label htmlFor="email" className="absolute -top-1 ms-3 block bg-slate-950 px-1 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">Email</label>
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
                <label htmlFor="phone" className="absolute -top-1 ms-3 block bg-slate-950 px-1 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">Phone Number</label>
              </div>
              <div className="relative mb-4">
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  className="w-full px-3 py-2 rounded-lg placeholder-transparent text-secondary-100 bg-transparent text-sm border border-slate-900 focus:outline-none focus:border-2 focus:border-secondary-100 peer"
                  required
                >
                </textarea>
                <label htmlFor="message" className=" absolute -top-1 ms-3 block bg-slate-950 text-sm text-secondary-200 peer-placeholder-shown:top-3.8 peer-placeholder-shown:mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary-100 transition-all">Your Message</label>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-primary-100 inline-block text-black no-underline hover:bg-primary-200 py-4 px-4 rounded focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p className="text-base text-center text-secondary-200" id="result"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

