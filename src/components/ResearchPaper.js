import React from 'react'
import styled from 'styled-components'

import PDF from '../static/Final_Report.pdf'

const StyledResearchPaper = styled.object`
  width: 100%;
  height: 100%;
`

function ResearchPaper() {
  return (
    <StyledResearchPaper data={PDF} type="application/pdf" >
      <p>Oops! Your browser doesn't support PDFs!</p>
      <a href={PDF} target="_blank" rel="noreferrer"><p>Download Instead</p></a>
    </StyledResearchPaper>
  )
}

export default ResearchPaper