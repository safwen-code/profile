import React from 'react'
import Project from './content/Project'
import Skillmain from './content/Skillmain'
import Description from './content/Description.jsx'
import Devskills from './content/Devskills.jsx'
import Contact from './content/Contact.jsx'

const Containers = ({ activeNavItem }) => {
  return (
    <div className=" col-md-8 ">
      {activeNavItem === 'description' && <Description />}
      {activeNavItem === 'project' && <Project />}
      {activeNavItem === 'skills' && <Skillmain />}
      {activeNavItem === 'devskills' && <Devskills />}
      {activeNavItem === 'contact' && <Contact />}
    </div>
  )
}

export default Containers
