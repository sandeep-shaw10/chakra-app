import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import HomeYoga from '../static/HomeYoga'
import ContactIcon from '../static/ContactIcon'
import AboutIcon from '../static/AboutIcon'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
        <MainLayout>
          <div className='grid grid-cols-1 md:grid-cols-2 md:mx-12'>

            <div>
              <HomeYoga />
            </div>

            <div className='grid justify-items-center my-8 md:order-last'>
              <div className='flex flex-col items-center justify-center' >
                <div className='text-4xl font-semibold'>Chakra Meditation</div>
                <div className='text-lg mb-2'>Unleash Your Energy Centers</div>
                <Link to="/chakra" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>

          </div>


          <div className='my-12 text-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:mx-12'>

            <div className='md:order-last'>
              <AboutIcon />
            </div>

              <div className='grid justify-items-center my-8'>
                <div className='flex flex-col items-center justify-center' >
                <div className='text-4xl font-semibold'>About Us</div>
                  <div className='text-xl mb-2'>
                    A simple Progressive Web Application Made using ReactJS, Tailwind CSS and Workbox. All in One 
                    Website, Desktop and Mobile Application
                  </div>
                  <Link to="/about" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      About
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='my-12 text-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 md:mx-12'>
            <div>
              <ContactIcon />
            </div>
            <div className='grid justify-items-center my-8 md:order-last'>
              <div className='flex flex-col items-center justify-center' >
              <div className='text-4xl font-semibold'>Get in Touch</div>
                <div className='text-xl mb-2'>
                  Know more about the developer and designer of this Web App ?
                </div>
                <Link to="/contact" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </div>
          </div>

{/* 
          <a href="https://www.buymeacoffee.com/sandeepshaw10" target="_blank">
            <img 
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
              alt="Buy Me A Coffee" style={{height: `60px !important`, width: `217px !important`}} />
            </a>
          <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="sandeepshaw10" data-color="#111827" data-emoji=""  data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script> */}


        </MainLayout>
    </>
  )
}
