import React from 'react'
import { Typography, Divider, Grid } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

import developpement from '../../images/development.png'
import api from '../../images/api.jpg'
import uimang from '../../images/uimang.png'

import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

const Description = () => {
  return (
    <>
      <Typography variant="h3" component="h3" align="left" ml={2}>
        About me
      </Typography>
      <Divider light />
      <Typography variant="caption" component="h5" align="left" ml={5} mt={1}>
        Developpeur Full Stack passionnée par l’univer du web et dotée d’une
        curiosité pour cette metier.Polyvalent et forte de 2 ans d’experience,
        je me suis spécialisée dans le developpement frontend ansi que le
        backend. Je suis spécialisée sur les frameworks React, php et nodejs.
      </Typography>

      <Typography variant="h3" component="h3" align="left" ml={2} mt={1}>
        what i do!
      </Typography>
      <Divider light />

      <Grid container spacing={2} mt={1}>
        <Grid item sm={6} md={4}>
          <Tilt options={defaultOptions}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="web dev"
                height="100"
                image={developpement}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Web Developpement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  create apps in many domaine like education managment with
                  react jquery css sass and more utils.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  More than 3 years experience in this domaine
                </Button>
              </CardActions>
            </Card>
          </Tilt>
        </Grid>
        <Grid item sm={6} md={4}>
          <Tilt options={defaultOptions}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="backend dev"
                height="100"
                image={api}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  backend developpment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  create Apis with node and php framewok using the concept of
                  micro-service systéme
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  More of 2 years experience in this domaine "industry 4.7"
                </Button>
              </CardActions>
            </Card>
          </Tilt>
        </Grid>
        <Grid item sm={6} md={4}>
          <Tilt options={defaultOptions}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="Ui & Managment"
                height="100"
                image={uimang}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  UI & Mangement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  create ui concept interface depend the concept of project
                  management project with kanban srum and to do .
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  More of 2 years experience in this domaine.
                </Button>
              </CardActions>
            </Card>
          </Tilt>
        </Grid>
      </Grid>
    </>
  )
}
export default Description
