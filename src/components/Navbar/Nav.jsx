import React, { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import DeviceSizeContext from '../../functions/DeviceSizeContext';
import { MoonIcon, SunIcon } from '../../static/icons';


export const PageLinks = [
  { name: "Home", link: "/" },
  { name: "Getting Stared", link: "/chakra" },
  { name: "About", link: "/about" },
]

const cssNavHover = `block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
const cssNavActive = `block py-2 pr-4 pl-3 text-white bg-orange-300 dark:bg-slate-900 rounded dark:md:bg-transparent md:bg-transparent md:text-orange-300 md:p-0 dark:text-white`


export default function Nav() {

  const location = useLocation();
  const [{isMenuOpen, darkTheme}, dispatch] = useContext(DeviceSizeContext)

  const toggleMenu = () => {
    dispatch({ type: `TOGGLE_MENU` })
  }

  const changeTheme = () => {
    dispatch({ type: `CHANGE_THEME` })
  }
  

  return (
    <nav className="bg-white border-gray-200 p-4 sm:px-4 py-4 rounded dark:bg-gray-800">

      <div className="container flex flex-wrap justify-between items-center mx-auto">

        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Chakra-App
          </span>
        </Link>

        <div className='block md:hidden'>
          <button data-collapse-toggle="mobile-menu" type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMenu} >

            <span className="sr-only">Open main menu</span>
            {  !isMenuOpen && <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 
              110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
              </path>
            </svg>}
            {  isMenuOpen && <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
                  10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
            </svg>}

          </button>
        </div>

        <div className={`${(isMenuOpen) ? '' : 'hidden'} w-full md:w-auto md:block md:w-auto`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            { PageLinks.map((page, index) => {
              return <li key={index}>
                <Link to={page.link}
                  className={(location.pathname === page.link)? cssNavActive: cssNavHover}
                  > {page.name}
                </Link>
              </li>
            }) }
            <li>
              <button className='py-4 pl-4 md:p-0' onClick={changeTheme}>{darkTheme ? <MoonIcon/>: <SunIcon/>}</button>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  );
}
