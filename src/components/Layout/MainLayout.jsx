import React from 'react'
import Footer from '../Navbar/Footer'
import Nav from '../Navbar/Nav'


function NavLayout({ children }) {
  return (
    <>
      <Nav />
        <div className='px-8 py-6'>
          { children }
        </div>
      <Footer />
    </>
  )
}


export default NavLayout