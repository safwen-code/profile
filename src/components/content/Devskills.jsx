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
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import gomy from '../../images/gomy.png'
import iset from '../../images/iset.jpg'
import open from '../../images/open.png'
import bqube from '../../images/bqube.jpg'
import tim from '../../images/tim.jpg'

const Devskills = (props) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div style={{ border: '1px solid #000000' }}>Education</div>
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
              <Button size="small">Show more</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '8px' }}>
            <CardHeader
              title="Open Classroom"
              subheader="October 2018, 2023"
              avatar={<Avatar aria-label="recipe" src={open} />}
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
              <Button size="small">Show more</Button>
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
              <Button size="small">Show more</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <div>Experience</div>
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
              <Button size="small">Show more</Button>
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
              <Button size="small">Show more</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Devskills
