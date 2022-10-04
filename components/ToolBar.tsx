import { Box, Grid, IconButton } from '@mui/material'
import {
  Code,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from '@mui/icons-material'
import { useSlate } from 'slate-react'
import styled from 'styled-components'

import { isFormatActive, toggleStyleActive } from '../utils/formatter'

const StyeldBox = styled(Box)`
  position: absolute;
  top: 24px;
  left: 42%;
  background: #fff;
  border-radius: 8px;
  padding: 4px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

const ToolBar = () => {
  const editor = useSlate()

  const getButtonColor = (type: string) => {
    return isFormatActive(editor, type) ? 'primary' : 'default'
  }

  return (
    <StyeldBox>
      <Grid container spacing={2}>
        <Grid item>
          <IconButton
            color={getButtonColor('bold')}
            onClick={() => toggleStyleActive(editor, 'bold')}
          >
            <FormatBold />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color={getButtonColor('underlined')}
            onClick={() => toggleStyleActive(editor, 'underlined')}
          >
            <FormatUnderlined />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color={getButtonColor('italic')}
            onClick={() => toggleStyleActive(editor, 'italic')}
          >
            <FormatItalic />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color={getButtonColor('code')}
            onClick={() => toggleStyleActive(editor, 'code')}
          >
            <Code />
          </IconButton>
        </Grid>
      </Grid>
    </StyeldBox>
  )
}

export default ToolBar
