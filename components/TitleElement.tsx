import { Typography } from '@mui/material'
import styled from 'styled-components'

import type { RenderElementProps } from 'slate-react'

const StyledTitle = styled(Typography)`
  margin-bottom: 14px;
  font-weight: 900;
`

const TitleElement = ({ attributes, children }: RenderElementProps) => (
  <StyledTitle {...attributes} variant="h5">
    {children}
  </StyledTitle>
)

export default TitleElement
