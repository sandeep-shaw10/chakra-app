import React, { useRef, useReducer } from 'react'
import { Play, Pause } from '../static/icons'


const initialState = { isPaused: false, count: 1, isComplete: false, freq: 9 }

const ACTION = {
    TOGGLE: 'TOGGLE',
    COUNT_INC: 'COUNT_INC',
    END_LOOP: 'END_LOOP',
    RESTART: 'RESTART',
    CONTINUE: 'CONTINUE',
    FREQUENCY: 'FREQUENCY',
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTION.TOGGLE:
            return { ...state, isPaused: !state.isPaused }
        case ACTION.COUNT_INC:
            return { ...state, count: state.count+1 }
        case ACTION.END_LOOP:
            return { ...state, isPaused: false, count:1, isComplete: true }
        case ACTION.RESTART:
            return { ...state, isPaused: false, count: 1, isComplete: false }
        case ACTION.CONTINUE:
            return { ...state, isComplete: false }
        case ACTION.FREQUENCY:
            return { ...state, freq: action.number }
        default:
            return state
    }
}


export default function PlayAudio({ AUDIO, chant, tailwindStyle }) {

    const audioRef = useRef()
    const [{isComplete, count, isPaused, freq}, dispatch] = useReducer(reducer, initialState)
  
  
    const playPause = () => {
        if(!isPaused) { audioRef.current.play() }
        else { audioRef.current.pause() }

        if(!isPaused && isComplete){
          dispatch({ type: ACTION.RESTART })
        }

        dispatch({type: ACTION.TOGGLE})
    }
  
    const playLoop = () => {
        dispatch({type: ACTION.CONTINUE})
        if(isPaused && count < freq){
            audioRef.current.play()
            dispatch({type: ACTION.COUNT_INC})
        }else{
            audioRef.current.pause()
            dispatch({type: ACTION.END_LOOP})
        }
    }
  
    const restartAudio = () => {
        audioRef.current.pause()
        dispatch({type: ACTION.RESTART})
    }
  
    const onValueChange = () => {}
  
    const onFrequencyChange = (ev) => {
      if(ev.target.value > 0){
        dispatch({ type: ACTION.FREQUENCY, number: ev.target.value })
      }else{
        dispatch({ type: ACTION.FREQUENCY, number: 1 })
      }
    }


  return (
    <div className='grid grid-cols-1 mb-8'>
    <div className='bg-white dark:bg-slate-700 rounded-lg shadow-lg p-8'>
    
      <div className='grid grid-cols-1 lg:grid-cols-2'>

        <div className='flex flex-col mb-4'>
          <audio controls="controls" preload="auto" autobuffer="true" style={{ display: "none" }} ref={audioRef} onEnded={playLoop}>
            <source src={AUDIO} />
          </audio>
          <button className='flex justify-center py-4 focus-visible:outline-none' onClick={playPause}> { !isPaused ? <Play/>: <Pause/>} </button>
          <input className='w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-600' type="range" min="0" max={freq} value={count-1} onChange={onValueChange}></input>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-col items-center justify-center py-6 px-8'>
            <span className='text-6xl font-bold pb-4'>{chant}</span>
            <span className='text-2xl font-semibold'>
            { isComplete ? `Done`: `${(Math.round(((count-1)/freq)*100))}% Completed`}
            </span>
          </div>
          <div className='flex flex-col items-center justify-center py-6 px-8'>
            <span className='text-2xl font-semibold'>{ `${count} / ${freq}` }</span>
            <span>
              <input type="range" min="1" max="108" onChange={onFrequencyChange} 
              className='w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-slate-600'></input>
            </span>
            <span className='mt-4'>
              <button className={tailwindStyle} onClick={restartAudio}> Restart </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
