import React from "react";
import MainLayout from "../components/Layout/MainLayout";
import ContactIcon from "../static/ContactIcon";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <MainLayout>
        <div className="my-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:mx-12">
            <div>
              <ContactIcon />
            </div>

            <div className="grid justify-items-center my-8">
              <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-semibold text-orange-500 dark:text-slate-500">Get in Touch</div>
                <div className="px-12 text-xl mb-2 text-gray-700 dark:text-gray-300">
                  A simple Progressive Web Application Made using ReactJS,
                  Tailwind CSS and Workbox. All in One Website, Desktop and
                  Mobile Application
                </div>
                <Link
                  to="/chakra"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="flex flex-col justify-center p-4 mb-12 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sandeep Shaw
              </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Full Stack Web Developer &amp; Graphic Designer
            </p>
            <a rel="noreferrer" className="flex flex-col items-center" href="https://www.buymeacoffee.com/sandeepshaw10" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee" width="160px"
              />
            </a>
            </div>


          <div className="p-4 mb-12 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            PWA
          </h5>
          <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Explore your limit beyond unexplorable with this app. Available for Desktop and Mobile Applications
          </p>
          <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="http://localhost:3000/" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto text-white roundenoreferrerd-lg inline-flex items-center justify-center px-4 py-2.5text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                <svg className="mr-3 w-7 h-7" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"></path></svg>
              <div className="text-left">
                <div className="mb-1 text-xs">Install it on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Desktop and PCs
                </div>
              </div>
            </a>
            <a
              href="http://localhost:3000/" target="_blank" rel="noreferrer"
              className="w-full sm:w-auto text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <svg className="mr-3 w-7 h-7" stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.802 20.283c0 1.23-0.857 2.237-1.904 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.904 1.007 1.904 2.237v7.321zM29.007 20.283c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.006-1.905-2.237v-7.321c0-1.23 0.857-2.237 1.905-2.237s1.905 1.007 1.905 2.237v7.321zM20.164 3.649l1.222-2.193c0.1-0.179 0.070-0.388-0.065-0.463s-0.329 0.009-0.428 0.188l-1.25 2.244c-1.115-0.439-2.364-0.684-3.684-0.684-1.33 0-2.588 0.25-3.71 0.695l-1.256-2.254c-0.1-0.179-0.293-0.264-0.428-0.188s-0.165 0.284-0.065 0.463l1.228 2.204c-2.555 1.2-4.276 3.453-4.276 6.035 0 0.262 0.019 0.521 0.053 0.776h16.909c0.035-0.255 0.053-0.513 0.053-0.776 0-2.59-1.732-4.849-4.301-6.046zM12.097 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM19.861 7.477c-0.411 0-0.744-0.333-0.744-0.744s0.333-0.744 0.744-0.744 0.744 0.333 0.744 0.744c0 0.411-0.333 0.744-0.744 0.744zM7.45 11.211v12.471h0.007c0.087 1.053 1.056 1.89 2.23 1.89h12.541c1.173 0 2.142-0.837 2.23-1.89h0.007v-12.471h-17.014zM14.74 25.51v3.858c0 1.23-0.857 2.237-1.905 2.237s-1.904-1.007-1.904-2.237v-3.855zM21.088 25.508v3.86c0 1.23-0.857 2.237-1.905 2.237s-1.905-1.007-1.905-2.237v-3.86z"></path></svg>
              <div className="text-left">
                <div className="mb-1 text-xs">Add Homescreen on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Mobile Device
                </div>
              </div>
            </a>
          </div>
        </div>

        </div>

      </MainLayout>
    </>
  );
}
