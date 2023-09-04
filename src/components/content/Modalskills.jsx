import React, { useState } from 'react'
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Dialog,
  Divider,
  TextField,
  ListItem,
  ListItemText,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import FavoriteIcon from '@mui/icons-material/Favorite'
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}

const Modalskills = ({ open, handleClose, data }) => {
  const [liked, setliked] = useState(true)
  //console.log(data)
  const { title, description } = data
  const changeLiked = () => {
    setliked(!liked)
    console.log(liked)
  }
  const [comments, setcomments] = useState({
    etat: false,
    comment: [],
  })
  const { etat, comment } = comments
  const changeComments = () => {
    console.log(etat)
    setcomments({ ...comments, etat: !etat })
  }
  const onchangeHundel = (e) => {
    setcomments({ ...comments, comment: [e.target.value] })
  }
  const addcoments = () => {
    let listcomment = comments.comment
    console.log(listcomment)
    handleClose()
    setcomments({ ...comments, comment: [] })
    // console.log(typeof comment)
  }
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>
      <DialogContent>
        <Typography gutterBottom>{description}</Typography>
        <Divider />
        <DialogContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton aria-label="add to favorites" onClick={changeLiked}>
            <FavoriteIcon color={liked ? '#ffebee' : 'error'} />
          </IconButton>
          <IconButton aria-label="add comment" onClick={changeComments}>
            <InsertCommentOutlinedIcon />
          </IconButton>
        </DialogContent>
        {etat && (
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            name="comment"
            value={comment}
            onChange={onchangeHundel}
            variant="standard"
            fullWidth
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={addcoments}>
          Save Changes
        </Button>
      </DialogActions>
    </BootstrapDialog>
  )
}

export default Modalskills
