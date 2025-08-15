import React from 'react'
import Nav from './portfolio/nav.jsx'
import './portfolio/port.css'
import Into from './portfolio/intro.jsx'
import About from './portfolio/About.jsx'
import Skill from './portfolio/skill.jsx'
import Project from './portfolio/project.jsx'
import Footer from './portfolio/footer.jsx'
function Portfolio() {
  return (
    <>
     <Nav/>
     <Into/>
     <About/>
     <Skill/>
     <Project/>
     <Footer/> 
    </>
  )
}

export default Portfolio