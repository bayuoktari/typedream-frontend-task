import React, { useState, useMemo, useCallback } from 'react'
import { Box, Paper } from '@mui/material'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import Head from 'next/head'
import styled from 'styled-components'

import DefaultElement from '../components/DefaultElement'
import Leaf from '../components/Leaf'
import TitleElement from '../components/TitleElement'
import ToolBar from '../components/ToolBar'

import type { RenderElementProps } from 'slate-react'
import type { NextPage } from 'next'

const StyledBox = styled(Box)`
  padding: 100px 130px;
  width: 100%;
  height: 100vh;
  background-color: #dfe0e1;
  overflow-y: scroll;
`

const StyledContentBox = styled(Box)`
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
const initialValue: Descendant[] = [
  {
    type: 'title',
    children: [{ text: 'Get Ready to Type Your First Article !' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Type whatever you like',
      },
    ],
  },
]

const Home: NextPage = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState(initialValue)

  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case 'title':
        return <TitleElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  return (
    <>
      <Head>
        <title>Rich Text Editor</title>
      </Head>
      <StyledBox>
        <Paper elevation={4}>
          <StyledContentBox p={5} height="100vh">
            <Slate editor={editor} value={value} onChange={setValue}>
              <ToolBar />
              <Editable
                renderElement={renderElement}
                renderLeaf={(props) => <Leaf {...props} />}
                autoFocus
              />
            </Slate>
          </StyledContentBox>
        </Paper>
      </StyledBox>
    </>
  )
}

export default Home
