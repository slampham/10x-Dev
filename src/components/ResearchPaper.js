import React from 'react'
import styled from 'styled-components'

import PDF from '../static/Final_Report.pdf'

const StyledResearchPaper = styled.embed`
  width: 100%;
  height: 100%;
`

function ResearchPaper() {
  return <StyledResearchPaper src={PDF}/>
}

export default ResearchPaper