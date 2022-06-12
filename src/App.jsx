import React, { useEffect } from "react";
import DeviceSizeContext from "./functions/DeviceSizeContext";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Chakra from "./pages/Chakra";
import Contact from "./pages/Contact";
import License from "./pages/License";
import Privacy from "./pages/Privacy";
import useAppPersist from "./functions/useAppPersist";
import ChakrasLayout from "./pages/ChakrasLayout";
import Error from "./pages/Error";
import ChakraData from "./static/chakraData";


const localStorageKey = 'CHAKRA_APP'


function App() {
  
  const [state, dispatch] = useAppPersist(localStorageKey)
  
  useEffect(() => {
    dispatch({ type: `SET_THEME` })
  }, [dispatch])
  

  return <div className={!state.darkTheme ? `primaryBody`: `darkBody`}>
    <DeviceSizeContext.Provider value={[state, dispatch]}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/chakra" >
          <Route index element={<Chakra/>} />
          {
            ChakraData.map((link, index) => 
              <Route 
                key={index}
                path={link.path}
                element={
                  <ChakrasLayout
                    data={link}
                  />
                } 
              />
            )
          }
        </Route>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/license" element={<License/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </DeviceSizeContext.Provider>
  </div>
}


export default App;