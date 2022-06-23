import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import HomeYoga from '../static/HomeYoga'
import ContactIcon from '../static/ContactIcon'
import AboutIcon from '../static/AboutIcon'
import { Link } from 'react-router-dom'


const data = [
  {
    head:"Chakra Meditation", 
    sub:"Unleash Your Energy Centers", 
    btn:"Get Started", 
    link:"/chakra",
    ele: <AboutIcon />
  },

  {
    head:"About Us", 
    sub:"A simple Progressive Web Application Made using ReactJS, Tailwind CSS and Workbox. All in One Website, Desktop and Mobile Application", 
    btn:"About", 
    link:"/about",
    ele: <HomeYoga/>
  },

  {
    head:"Get in Touch", 
    sub:"Know more about the developer and designer of this Web App ?", 
    btn:"Contact", 
    link:"/contact",
    ele: <ContactIcon /> 
  }
]


export default function Home() {
  return (
    <>
        <MainLayout>
          {
            data.map(({head, sub, ele, btn, link}, index) => {
              return <div className='my-12 text-center' key={index}>
              <div className='grid grid-cols-1 md:grid-cols-2 md:mx-12'>
                <div className={`${ (index % 2 === 0) ? '' : 'md:order-last'} md:p-8`} >{ ele }</div>
                <div className='grid justify-items-center my-8'>
                  <div className='flex flex-col items-center justify-center' >
                  <div className='text-4xl font-semibold mb-2 text-orange-500 dark:text-slate-500'>{ head }</div>
                    <div className='text-xl mb-4 text-gray-700 dark:text-gray-300'>{ sub }</div>
                    <Link to={link} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {btn}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            })
          }
        </MainLayout>
    </>
  )
}
