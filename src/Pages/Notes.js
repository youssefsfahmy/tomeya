import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Alert } from '@material-ui/lab'

import Notecard from '../Components/Notes/Notecard'
import { makeStyles } from '@material-ui/core/styles'
import tom from './tomeyaa-03.png'
import { Snackbar } from '@material-ui/core'
import { MuiAlert } from '@material-ui/lab'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '150vw',
    backgroundImage: `url(${tom})`,
  },
})
export default function Notes() {
  const headers = window.localStorage.getItem('token')
  const [newNotecard, setNewNotecard] = React.useState(0)
  const [IdCounter, setIdCounter] = React.useState(0)
  const [titleNote, setTitleNote] = React.useState('')
  const [taskNote, setTaskNote] = React.useState('')
  const [change, setChange] = React.useState(false)
  const [notesArray, setNotesArray] = React.useState([])
  const [error, setError] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [saved, setSaved] = React.useState('')
  const [severityState, setSeverityState] = React.useState('')

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  useEffect(() => {
    console.log('Here')
    axios
      .post(
        'http://localhost:5000/notes/viewAllNotes',
        { Notes: {} },
        {
          headers: {
            token: headers,
          },
        }
      )
      .then((res) => {
        console.log(res.data)
        setNotesArray(res.data.displayedNotes)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [change])

  const classes = useStyles()

  const titleNoteChange = (e) => {
    setTitleNote(e.target.value)
    console.log(titleNote)
  }
  const taskNoteChange = (e) => {
    setTaskNote(e.target.value)
    console.log(taskNote)
  }

  const handleChangeNotesArray = (event) => {
    setNotesArray(event.target.value)
  }
  const handleNewNotecard = (event) => {
    setNewNotecard(event.target.value)
  }

  const handleAddNotecard = async (title, task) => {
    console.log('note added')
    const res = await axios.post(
      'http://localhost:5000/notes/createNote',
      {
        Notes: {
          title: title,
          task: task,
        },
      },
      {
        headers: {
          token: headers,
        },
      }
    )
    console.log(res)

    if (res.data.error) {
      setSeverityState('warning')
      setError(res.data.error)
      handleClick()
      setOpen(true)
    }
    if (res.data.message) {
      setSeverityState('success')
      setError('saved succesfuly')
      handleClick()
      setOpen(true)
    }

    if (res.data.statusCode === 0) {
      setChange((prev) => !prev)
    }
    if (res.data.statusCode === 1) {
      console.log(res.data.error)
    }
  }

  const handleDeleteNotecard = async (id) => {
    console.log(id)
    const res = await axios.post(
      'http://localhost:5000/notes/deleteNote',
      { id },
      {
        headers: {
          token: headers,
        },
      }
    )
    console.log(res)
    setChange((prev) => !prev)
  }

  return (
    <div className={classes.root}>
      <div
        className={classes.background}
        style={{ width: '100vw', justifyContent: 'center', display: 'flex' }}
      >
        <Notecard new={true} handleAddNotecard={handleAddNotecard} />
      </div>
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginTop: '3vw',
        }}
      >
        {notesArray.map((d) => (
          <Notecard
            handleDeleteNotecard={handleDeleteNotecard}
            title={d.title}
            task={d.task}
            id={d._id}
            new={false}
            key={d._id}
          />
        ))}
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert id='success' onClose={handleClose} severity={severityState}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  )
}
