import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

import Navbar from '../layout/Navbar'
import Aboutme from '../layout/Aboutme'
import Containers from './Containers'

//define item
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Main = () => {
  const [activeNavItem, setActiveNavItem] = useState('description')

  return (
    <>
      <Container fixed>
        <Navbar
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
        <Box sx={{ flexGrow: 1 }} p={1} mt={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Item>
                <Aboutme />
              </Item>
            </Grid>
            <Grid item xs={12} md={8}>
              <Item>
                {' '}
                <Containers activeNavItem={activeNavItem} />{' '}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Main
