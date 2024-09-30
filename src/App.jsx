import React, { useEffect } from 'react'
import Navigation from './port/navigation'
import Home from './port/home'
import Education from './port/education'
import Skills from './port/skills'
import Project from './port/project'
import Contact from './port/contact'
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init();
  },[])

  return (
    <>
    <Navigation/> 
    <Home/>  
    <Education/>
    <Skills/>
    <Project/>
    <Contact/>
    </>
  )
}

export default App




{/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}