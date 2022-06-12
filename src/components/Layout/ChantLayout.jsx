import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import DeviceSizeContext from '../../functions/DeviceSizeContext';
import { MoonIcon, SunIcon } from '../../static/icons';



const cssNavHover = `py-2 ml-4 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`


function ChakraLayout({ style, children }) {

  const [{darkTheme}, dispatch] = useContext(DeviceSizeContext)

  const changeTheme = () => {
    dispatch({ type: `CHANGE_THEME` })
  }

  return (
    <>
      <div className={style}>
        <div className='font-sans grid grid-cols-12 mx-8'>
          <div className='col-span-9'>
            <Link to="/" className={cssNavHover}> Home </Link>
            <Link to="/chakra" className={cssNavHover}> Chakra </Link>
          </div>
          <div className='col-span-3 grid justify-items-end '>
          <button className='mt-2 py-4 pl-4 md:p-0' onClick={changeTheme}>{darkTheme ? <MoonIcon/>: <SunIcon/>}</button>
          </div>
        </div>
        { children }
    </div>
    </>
  )
}


export default ChakraLayout