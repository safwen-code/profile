import React from 'react'

import Contactgeo from './contentCantainers/Contactgeo'
import Contactvalidation from './contentCantainers/Contactvalidation'
const Contact = () => {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <Contactgeo />
        <Contactvalidation />
        <div className="d-flex justify-content-center mt-4 mb-2 ">
          © 2023 All Rights Reserved by ib-themes.
        </div>
      </div>
    </div>
  )
}

export default Contact
