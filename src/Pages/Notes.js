import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'

import Notecard from '../Components/Notes/Notecard'
import { makeStyles } from '@material-ui/core/styles'
import tom from './tomeyaa-03.png'
import Remove from '@material-ui/icons/Remove'

const useStyles = makeStyles({
  // background: {
  //   backgroundImage: `url(${tom})`,
  // },
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
  //creating a notecard object and adding it to the array NotesArray

  // useEffect(() => {
  //   axios
  //     .post(
  //       'http://localhost:5000/notes/viewAllNotes',
  //       { Notes: {} },
  //       {
  //         headers: {
  //           token: headers,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data.displayedNotes)
  //       setNotesArray(res.data.displayedNotes)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }, [change])

  const handleAddNotecard = async (title, task) => {
    // var notecard = { id: IdCounter, title: title, task: task }
    // setNotesArray((prevArray) => [...prevArray, notecard])
    // setIdCounter(IdCounter + 1)

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
    if (res.data.statusCode === 0) {
      setChange((prev) => !prev)
    }
  }

  const handleDeleteNotecard = async (id) => {
    console.log(id)
    const res = await axios.post('http://localhost:5000/notes/deleteNote', id, {
      headers: {
        token: headers,
      },
    })
    console.log(res.data)
    setChange((prev) => !prev)
  }

  return (
    <div className={classes.root}>
      {/* {notesArray.map((value) => (
        <Notecard details={value} />
      ))} */}
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
    </div>
  )
}
