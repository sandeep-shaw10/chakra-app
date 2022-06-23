import React from 'react'
import PlayAudio from '../components/PlayAudio'
import FadeIn from 'react-fade-in'
import MainLayout from '../components/Layout/MainLayout'


export default function ChakrasLayout({ data }) {

  const {
    name, sanskrit, element, petalIcon,
    position, bodyWell, quality, petalCount, color, chant,
    positionBottom, positionImg, tailwindStyle, sound
  } = data

  const infoData = [
    { name: "Located", value: position },
    { name: "Body Parts", value: bodyWell.join(", ") },
    { name: "Element", value: element },
    { name: "Petal Count", value: `This chakra has ${petalCount} petals` },
    { name: "Chakra Color", value: color },
    { name: "Chant", value: chant }
  ]
  
  return (

    <MainLayout>

      <FadeIn>
      <div className='flex flex-row justify-center'>
        <img alt="test" src={positionImg} loading="lazy"/>
      </div>
      </FadeIn>

      <div className="py-6 my-6 rounded-lg shadow-lg bg-white dark:bg-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="lg:text-center">
            <div className="flex flex-row lg:justify-center">
              <img alt="test" src={petalIcon} />
            </div>
            <h2 className={`text-base font-semibold tracking-wide uppercase ${tailwindStyle[6] ?? ''}`}>{name}</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-800 sm:text-4xl">The {sanskrit}</p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The position of {name} from the base of the lower body is at <span className='font-bold'>{positionBottom}</span>. <br/>
              This chakra is the representation of the element <span className='font-bold'>{element}</span>
            </p>
          </div>

          <div className="flex md:justify-center my-3 flex-wrap ">
        {
          quality.map((ele, index) => {
            return <span key={index} 
              className={`sm:text-lg sm:font-semibold sm:mr-1 px-2 py-0.5 rounded mt-1 ml-3 ${tailwindStyle[5]}`}>
                { ele }
              </span>
            })
        }
      </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {
                infoData.map((data, index) => {
                  return <div className="relative" key={index}>
                    <dt>
                      <div className={`absolute flex items-center justify-center h-12 w-12 rounded-md text-white ${tailwindStyle[2]}`}>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{data.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 capitalize">{ data.value }</dd>
                  </div>
                })
              }
            </dl>
          </div>

        </div>
      </div>

      <div className={`${tailwindStyle[1].slice(10)}`}>
        <PlayAudio AUDIO={sound} chant={chant} tailwindStyle={tailwindStyle[0]}/>
      </div>

    </MainLayout>
  )
}
