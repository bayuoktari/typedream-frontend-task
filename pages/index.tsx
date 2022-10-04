import React from 'react'
import { Box, Typography, Button, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import type { NextPage } from 'next'

const StyeldBox = styled(Box)`
  background: linear-gradient(244deg, #c29d68, #84f0e2, #c586b8, #b59323);
  background-size: 240% 240%;
  animation: gradient-animation 40s ease infinite;
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <StyeldBox
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Typography variant="h2">Typedream Simple Rich Text Editor</Typography>
        <Box mt={2}>
          <Grid container spacing={4}>
            <Grid item>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => router.push('/editor')}
              >
                Try Text Editor
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="inherit"
                href="https://linkedin.com/in/bayuoktari"
              >
                About Me
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </StyeldBox>
  )
}

export default Home
