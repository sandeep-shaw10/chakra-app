import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import DeviceSizeContext from '../../functions/DeviceSizeContext';
import { MoonIcon, SunIcon } from '../../static/icons';



const cssNavHover = `block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`


function NavLayout({ children }) {

  const [{darkTheme}, dispatch] = useContext(DeviceSizeContext)

  const changeTheme = () => {
    dispatch({ type: `CHANGE_THEME` })
  }

  return (
    <>
      <div className='px-8 py-6'>
        <div className='font-sans grid justify-center grid-cols-1 md:grid-cols-12 m-8'>
          <div className='text-4xl grid justify-center md:text-6xl font-semibold col-span-11 text-orange-900 dark:text-slate-300 '>
            Chakra Meditation
          </div>
          <div className='flex flex-row md:flex-col items-baseline justify-center'>
            <Link to="/" className={cssNavHover}>Home</Link>
            <button className='mt-2 py-4 pl-4 md:p-0' onClick={changeTheme}>{darkTheme ? <MoonIcon/>: <SunIcon/>}</button>
          </div>
        </div>
        { children }
      </div>
    </>
  )
}


export default NavLayout