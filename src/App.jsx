import React from 'react'
import "./App.scss"
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Skill from './Components/skill/Skill'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'
import CustomCursor from './Components/CustomCursor/CustomCursor'
const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Skill/>
      <Projects/>
      <Footer/>
      <CustomCursor/>
    </>
  )
}

export default App