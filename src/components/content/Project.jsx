import React from 'react'
import {
  Typography,
  Divider,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material'

import developpement from '../../images/development.png'
import api from '../../images/api.jpg'
import uimang from '../../images/uimang.png'
import { Link } from 'react-router-dom'

import apprelease from './app-release.apk'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import AirlineStopsIcon from '@mui/icons-material/AirlineStops'

const Project = () => {
  const download = () => {
    window.location.href = apprelease
  }
  return (
    <>
      <Typography variant="h3" component="h3" align="left" ml={2}>
        Projects
      </Typography>
      <Divider light />
      <Typography variant="caption" component="h5" align="left" ml={5} mt={1}>
        Software Engineer with 3 years Computer Science degree and more than 2
        year of experience.As a dedicated problem solver , I have many skill in
        Javascript ,node js , php and supporting laguages/libraries/frameworks
        that solve real-word problems through code.
      </Typography>

      <Typography variant="h3" component="h3" align="left" ml={2} mt={1}>
        Project I Done
      </Typography>
      <Divider light />

      <Grid
        container
        // rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        mt={1}
      >
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="web dev"
              height="100"
              image={developpement}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Jungel Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
                littel project that display planet of Jungel Home.
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                to="https://clever-cray-85c961.netlify.app/"
                target="_blank"
              >
                {' '}
                <Button size="small">
                  Created 3 years ago{' '}
                  <AirlineStopsIcon sx={{ marginLeft: '7px' }} />
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="backend dev"
              height="100"
              image={api}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Timilec Managment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Project for manage team position of termodure group
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="https://qrqc.netlify.app/" target="_blank">
                <Button size="small">
                  Created 2years ago{' '}
                  <AirlineStopsIcon sx={{ marginLeft: '7px' }} />
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Ui & Managment"
              height="100"
              image={uimang}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Portfolio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create a portfolio with react.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                You are here <AirlineStopsIcon sx={{ marginLeft: '7px' }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Ui & Managment"
              height="100"
              image={uimang}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                MovieDB
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create a movieDB with react native.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={download}>
                Created yesterday 2 week ago{' '}
                <ArrowCircleDownIcon sx={{ marginLeft: '7px' }} />
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
export default Project
