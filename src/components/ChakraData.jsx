import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../static/chakraData'
import FadeIn from 'react-fade-in';


export default function ChakraData() {

  return (
    <>
    <FadeIn>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mx-8 mt-6 gap-2'>
        {
            Data.map((value, index) => {
                return <div key={index} className='mx-4'>
                    <div className={value.tailwindStyle[3]}>
                    <Link to={value.path} >
                        <div className='flex justify-center'>
                        <img className="p-8 rounded-t-lg" src={value.petalIcon} alt=""/>
                        </div>
                        <div className="px-5 pb-5 flex flex-col items-center">
                            <span className={value.tailwindStyle[4]}>{ value.name }</span>
                            <div className="flex items-center my-3 flex-wrap">
                                {
                                    value.quality.slice(0, 2).map((ele, index) => {
                                        return <span 
                                            key={index} 
                                            className={`text-xs sm:font-semibold sm:mr-1 px-2 py-0.5 rounded ml-3 mt-1 ${value.tailwindStyle[5]}`}>
                                            { ele }
                                        </span>
                                    })
                                }
                            </div>
                        </div>
                        </Link>
                    </div>
                
                </div>
            })
        }
        </div>
        </FadeIn>
    </>
)}