import  { useReducer, useEffect } from "react"


// Set Theme on Load
const setThemeOnLoad = (darkTheme) => {
  const THEME = { LIGHT: 'light', DARK: 'dark' }
  let html = window.document.documentElement
  let val = darkTheme ? THEME.DARK: THEME.LIGHT
  html.classList.add(val)
}
  
// Reducer : initial value
const initialState = { isMenuOpen: false, darkTheme: false }
  
// Reducer Action Function
const reducer = (state, action) => {
    switch(action.type){
      case `TOGGLE_MENU`:
        return { ...state, isMenuOpen: !state.isMenuOpen }
      case `CLOSE_MENU`:
        return { ...state, isMenuOpen: false }
      case `CHANGE_THEME`: {
        toggleTheme(!state.darkTheme)
        return { ...state, darkTheme: !state.darkTheme }
        }
      case `SET_THEME`: {
        setThemeOnLoad(state.darkTheme)
        return state
      }
      default:
        return state
    }
}

// Local Storage: Save
function getSavedValue(key){
    let value = JSON.parse(localStorage.getItem(key))
    if(value === null){ return initialState }
    return value
}

// Append Dark Theme: Tailwind CSS
function toggleTheme(isDarkTheme){
    const THEME = { LIGHT: 'light', DARK: 'dark' }
    let html = window.document.documentElement
    let val = isDarkTheme ? THEME.DARK: THEME.LIGHT
    html.classList.add(val)
    html.classList.remove((val===THEME.LIGHT)?THEME.DARK:THEME.LIGHT)
}

// Custom Hooks for Persist
export default function useAppPersist(key){
    const [state, dispatch] = useReducer(reducer, initialState, ()=>{
        return getSavedValue(key)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, dispatch]
}