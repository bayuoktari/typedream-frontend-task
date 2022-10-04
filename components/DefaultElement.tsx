import { Typography } from '@mui/material'

import type { RenderElementProps } from 'slate-react'

const DefaultElement = ({ attributes, children }: RenderElementProps) => (
  <Typography {...attributes}>{children}</Typography>
)

export default DefaultElement
