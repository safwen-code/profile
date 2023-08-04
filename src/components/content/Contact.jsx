import React, { useState } from 'react'
import { Divider, Grid, Typography, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

import TextField from '@mui/material/TextField'
const Contact = () => {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formdata
  const ChangeHundel = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const submitHundel = () => {
    console.log(formdata)
    console.log('hi')
  }
  return (
    <>
      <Typography align="center" variant="h5">
        Contact Me
      </Typography>{' '}
      <Divider variant="middle" style={{ backgroundColor: '#4dabf5' }} mb={3} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-read-only-input"
            label="your name please"
            variant="standard"
            margin="dense"
            name="name"
            value={name}
            onChange={ChangeHundel}
            style={{ marginRight: '5px' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-read-only-input"
            label="your email please"
            variant="standard"
            margin="dense"
            name="email"
            value={email}
            onChange={ChangeHundel}
          />{' '}
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            width: 500,
            maxWidth: '100%',
            marginLeft: '10%',
          }}
        >
          <TextField
            fullWidth
            label="message please"
            id="fullWidth"
            margin="dense"
            multiline
            rows={4}
            name="message"
            value={message}
            onChange={ChangeHundel}
          />
        </Grid>
      </Grid>
      <Button
        style={{ marginTop: '10px', marginBottom: '5px' }}
        variant="outlined"
        endIcon={<SendIcon />}
        onClick={submitHundel}
      >
        Send
      </Button>
    </>
  )
}

export default Contact
