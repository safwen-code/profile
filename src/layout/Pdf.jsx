import React from 'react'
import { Document, Page } from 'react-pdf'
const Pdf = ({ pdfDataUrl }) => {
  return (
    <Document file={pdfDataUrl}>
      <Page pageNumber={1} />
    </Document>
  )
}

export default Pdf
