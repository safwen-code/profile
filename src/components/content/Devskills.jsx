import React from 'react'
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import gomy from '../../images/gomy.png'
import iset from '../../images/iset.jpg'
import openclass from '../../images/openclass.png'
import bqube from '../../images/bqube.jpg'
import tim from '../../images/tim.jpg'
import simac from '../../images/simac.jpg'
import intercom from '../../images/intercom.png'
import Modalskills from './Modalskills'
import { useState } from 'react'

import {
  openclassroomData,
  isetData,
  bqubeData,
  gomycodeData,
  timelecData,
  interData,
  simacData,
} from '../../utils/fakedata'
const styletitle = {
  fontZize: '2rem',
  fontWeight: 'bold',
  color: '#3f50b5',
  marginBottom: '10px',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
}
const Devskills = () => {
  const [open, setopen] = useState({
    gomy: false,
    openclass: false,
    iset: false,
    bqube: false,
    timelec: false,
    inter: false,
    sim: false,
  })
  const hundelshow = (modalName) => {
    setopen((prevState) => ({
      ...prevState,
      [modalName]: true,
    }))
  }
  const handleClose = (modalName) => {
    setopen((prevState) => ({
      ...prevState,
      [modalName]: false,
    }))
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div style={styletitle}>Education</div>
          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="Go My Code"
              subheader="October 2019, 2020"
              avatar={<Avatar aria-label="recipe" src={gomy} />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Développer des application à l'aide du framework react for
                frontend and nodejs for backend
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Developpeur Full Stack
              </Typography>
              <Button size="small" onClick={() => hundelshow('gomy')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={gomycodeData}
                  open={open.gomy}
                  handleClose={() => handleClose('gomy')}
                />
              )}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="Open Classroom"
              subheader="October 2018, 2023"
              avatar={<Avatar aria-label="recipe" src={openclass} />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Développer et construire des maquettes ansi contruire des api
                with node ,php et c sharp
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Developpeur
              </Typography>
              <Button size="small" onClick={() => hundelshow('openclass')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={openclassroomData}
                  open={open.openclass}
                  handleClose={() => handleClose('openclass')}
                />
              )}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="ISET"
              subheader="October 2013, 2017"
              avatar={
                <Avatar
                  sx={{ bgcolor: deepOrange[500] }}
                  aria-label="recipe"
                  src={iset}
                />
              }
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Développer une application web pour la ressource pédagogique de
                notre insitut
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Technicien Supérieur En Développment
              </Typography>
              <Button size="small" onClick={() => hundelshow('iset')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={isetData}
                  open={open.iset}
                  handleClose={() => handleClose('iset')}
                />
              )}
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div style={styletitle}>Experience</div>

          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="Bqubeits"
              subheader="October 2021, 2023"
              avatar={<Avatar aria-label="recipe" src={bqube} />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Développer des application à l'aide du framework telque react ,
                reactNative et jquery for industrie 4.0.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Developpeur Full Stack
              </Typography>
              <Button size="small" onClick={() => hundelshow('bqube')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={bqubeData}
                  open={open.bqube}
                  handleClose={() => handleClose('bqube')}
                />
              )}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="Timelec"
              subheader="October 2020, 2021"
              avatar={<Avatar aria-label="recipe" src={tim} />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Montage du produit à l’aide du système FT bios et Controller le
                produit.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Operateur Du Montage
              </Typography>
              <Button size="small" onClick={() => hundelshow('timelec')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={timelecData}
                  open={open.timelec}
                  handleClose={() => handleClose('timelec')}
                />
              )}
            </CardActions>
          </Card>
          <Divider light />
          <div style={styletitle}>Stages</div>
          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="ISET"
              subheader="October 2017"
              avatar={<Avatar aria-label="recipe" src={iset} />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Développer une application web pour la ressource pédagogique de
                notre insitut.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Developpeur Full Stack (PFE)
              </Typography>
              <Button size="small" onClick={() => hundelshow('iset')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={isetData}
                  open={open.iset}
                  handleClose={() => handleClose('iset')}
                />
              )}
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="Intercom Technologies"
              subheader="October 2017"
              avatar={<Avatar aria-label="recipe" src={intercom} />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Concepter et développer une application web dynamique pour la
                gestion de ressource Humaines d’équipe comsis.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Technicien Supérieur
              </Typography>
              <Button size="small" onClick={() => hundelshow('inter')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={interData}
                  open={open.inter}
                  handleClose={() => handleClose('inter')}
                />
              )}
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="SIMAC Tunisie"
              subheader="October 2016"
              avatar={<Avatar aria-label="recipe" src={simac} />}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Découvrir les compétences de base de développment tel que html,
                css, Javascript et DOM.
              </Typography>
            </CardContent>
            <CardActions>
              <Typography
                subtitle2="h6"
                color="text.secondary"
                style={{ fontSize: '0.9rem' }}
                mr={3}
              >
                {' '}
                Technicien
              </Typography>
              <Button size="small" onClick={() => hundelshow('sim')}>
                {' '}
                More info
              </Button>
              {open && (
                <Modalskills
                  data={simacData}
                  open={open.sim}
                  handleClose={() => handleClose('sim')}
                />
              )}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Devskills
