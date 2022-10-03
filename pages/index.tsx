import React, { useState } from 'react'
import { Box, Paper } from '@mui/material'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import Head from 'next/head'
import styled from 'styled-components'

import type { NextPage } from 'next'

const StyledBox = styled(Box)`
  padding: 48px 130px;
  width: 100%;
  height: 100vh;
  background-color: #9295a6;
  overflow-y: scroll;
`
const initialValue: Descendant[] = [
  {
    type: 'title',
    children: [{ text: 'Get Ready to Type Your First Article !' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Type whatever you like ....' }],
  },
]

const Home: NextPage = () => {
  const [editor] = useState(() => withReact(createEditor()))
  const [value, setValue] = useState(initialValue)

  return (
    <>
      <Head>
        <title>Rich Text Editor</title>
      </Head>
      <StyledBox>
        <Paper elevation={4}>
          <Box p={5} height="100vh">
            <Slate editor={editor} value={value} onChange={setValue}>
              <Editable />
            </Slate>
          </Box>
        </Paper>
      </StyledBox>
    </>
  )
}

export default Home
