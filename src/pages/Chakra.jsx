import React from 'react'
import MainLayout from '../components/Layout/MainLayout'
import ChakraData from '../components/ChakraData'


export default function Chakra() {
  return (
    <>
      <MainLayout>

          <div className='text-4xl mt-8 mb-12 grid justify-center md:text-6xl font-semibold col-span-11 text-orange-900 dark:text-slate-300 '>
            Chakra Meditation
          </div>

        <ChakraData/>

      </MainLayout>
    </>
  )
}
