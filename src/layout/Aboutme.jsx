import React from 'react'
import Typewriter from 'typewriter-effect'

import {
  Button,
  ListItemIcon,
  ListItemButton,
  Divider,
  ListItemText,
  ListItem,
  Typography,
  List,
  Avatar,
  Box,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PinDropIcon from '@mui/icons-material/PinDrop'
import CakeIcon from '@mui/icons-material/Cake'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'

import './style.css'
import cv from './cv.pdf'
import { saveAs } from 'file-saver'
import { IconButton } from '@mui/material'

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
}

let styles = {
  fontFamily: 'DethronePoliceSerifModerne, serif',
  fontSize: '34px',
}

const Aboutme = () => {
  const DownloadCV = async () => {
    console.log('download')
    //console.log(cv)
    fetch(cv)
      .then((response) => response.blob())
      .then((blob) => {
        // Trigger the download using FileSaver.js
        saveAs(blob, 'DS-FullStackDev.pdf')
      })
      .catch((error) => {
        console.error('Error downloading the file:', error)
      })
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar sx={{ bgcolor: 'info.main' }}>DS</Avatar>
      </Box>
      <List sx={style} component="div" aria-label="mailbox folders">
        <ListItem>
          <ListItemText
            sx={{
              color: '#5c6bc0',
              display: 'flex',
              justifyContent: 'center',
            }}
            primary={
              <Typography variant="body1" style={styles}>
                Djebbi Safwen
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem divider>
          <ListItemText
            sx={{
              color: '#5c6bc0',
              display: 'flex',
              justifyContent: 'center',
            }}
            style={{ fontFamily: 'cursive' }}
            primary={
              <Typewriter
                options={{
                  strings: [
                    'FullStack Developper',
                    'Web Developper',
                    'Software Engineer',
                    'Mobile Developepr',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            }
          />
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton href="https://github.com/safwen-code" target="_blank">
            <GitHubIcon
              color="#212121"
              fontSize="large"
              sx={{ marginRight: '5px' }}
            />
          </IconButton>
          <Divider orientation="vertical" flexItem></Divider>
          <IconButton
            href="https://www.linkedin.com/in/safwen-djebbi-5a996b204/"
            target="_blank"
          >
            <LinkedInIcon
              color="info"
              fontSize="large"
              sx={{ marginRight: '5px', marginLeft: '5px' }}
            />
          </IconButton>
          <Divider orientation="vertical" flexItem></Divider>
          <IconButton
            href="https://www.facebook.com/profile.php?id=100078734872887"
            target="_blank"
          >
            <FacebookIcon
              color="primary"
              fontSize="large"
              sx={{ marginLeft: '5px' }}
            />
          </IconButton>
        </ListItem>
      </List>
      <List sx={{ border: 1, borderColor: 'secondary.main', borderRadius: 1 }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <OnDeviceTrainingIcon
                color="info"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText primary="+216 26 706 437" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailOutlineIcon
                color="primary"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText primary="safwendjebbi1234@gmail.com" noWrap />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PinDropIcon
                color="secondary"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText primary="tunisie , ben arous" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CakeIcon
                color="warning"
                sx={{ marginRight: '5px', marginLeft: '5px' }}
              />
              <Divider orientation="vertical" flexItem></Divider>
            </ListItemIcon>

            <ListItemText primary="20/08/1994" />
          </ListItemButton>
        </ListItem>
      </List>
      <Button
        variant="outlined"
        sx={{ marginTop: 1 }}
        endIcon={<CloudDownloadIcon />}
        onClick={() => DownloadCV()}
      >
        telecharge CV
      </Button>
    </>
  )
}

export default Aboutme
