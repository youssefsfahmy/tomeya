import React, { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import DeleteIcon from '@material-ui/icons/Delete'
import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'

let counter = 0
let count = [
  {
    isDone: true,
    name: 'Todo 1',
  },
]

const useStyles = makeStyles({
  root: {
    width: '29.5vw',
    height: '21vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '0.5vw',
    marginLeft: '1vw',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 1vw',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: '2vw',
  },
  pos: {
    marginBottom: '2vw',
  },
  title: {
    width: '25vw',
  },
  note: {
    width: '25vw',
    height: '10vw',
  },
  button: {
    float: 'right',
  },
})

export default function Notecard(props) {
  const classes = useStyles()
  const [newNotecard, setNewNotecard] = React.useState(false)
  const [title, setTitle] = React.useState(props.title || '')
  const [task, setTask] = React.useState(props.task || '')
  const [save, setSave] = React.useState(false)
  const [newNote, setNewNote] = React.useState(true)
  const [deleteNote, setDeleteNote] = React.useState(false)
  const [id, setId] = React.useState(-1)
  const [edit, setEdit] = React.useState(false)
  const [titleNote, setTitleNote] = React.useState('')
  const [taskNote, setTaskNote] = React.useState('')

  const titleNoteChange = (e) => {
    setTitleNote(e.target.value)
    console.log(titleNote)
  }
  const taskNoteChange = (e) => {
    setTaskNote(e.target.value)
    console.log(taskNote)
  }

  // const titleNoteChange = (e) => {
  //   setTitleNote(e.target.value)
  //   console.log(titleNote)
  // }
  // const taskNoteChange = (e) => {
  //   setTaskNote(e.target.value)
  //   console.log(taskNote)
  // }

  // const handleCreateNote = async (e) => {
  //   console.log('changes saved successfully')
  //   const res = await axios.post('http://localhost:5000/notes/createNote', {
  //     title: titleNote,
  //     task: taskNote,
  //   })
  // }

  // const handleEditNote = async (e) => {
  //   const res = await axios.post('http://localhost:5000/notes/editNote', {
  //     title: titleNote,
  //     task: taskNote,
  //   })
  // }

  // const handleDeleteNote = async (e) => {
  //   console.log('note deleted successfully')
  //   const res = await axios.post('http://localhost:5000/notes/deleteNote', {
  //     title: titleNote,
  //     task: taskNote,
  //   })
  // }
  const handleNewNotecard = () => {
    setNewNotecard(!newNotecard)

    counter = counter + 1
    count.push(counter)
    console.log(counter)
    console.log(newNotecard)
  }
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const handleChangeTask = (event) => {
    setTask(event.target.value)
  }
  const handleChangeId = (event) => {
    setId(event.target.value)
  }
  const handleDeleteNotecard = (event) => {
    setDeleteNote(event.target.value)
  }
  const handleSave = (event) => {
    setSave(event.target.value)
  }
  const headers = window.localStorage.getItem('token')

  const handleEditNotecard = async (title, task, id) => {
    console.log(props.id)
    const res = await axios.post(
      'http://localhost:5000/notes/editNote',
      {
        Notes: {
          id: id,
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
    setEdit(false)
  }
  return (
    <List className={classes.root}>
      {[0].map((value) => {
        const labelId = `checkbox-list-label-${value}`

        return (
          <>
            {count.map((elem) => {
              return (
                <>
                  <Card className={classes.root}>
                    <CardContent>
                      <TextField
                        disabled={!props.new && !edit}
                        className={classes.title}
                        id='standard-password-input'
                        label='Title'
                        value={title}
                        onChange={handleChangeTitle}
                        value={title}
                      />
                      <br />
                      <br />
                      <TextField
                        disabled={!props.new && !edit}
                        className={classes.note}
                        placeholder='take a note...'
                        id='outlined-multiline-static'
                        multiline
                        rows={7}
                        defaultValue=''
                        variant='outlined'
                        onChange={handleChangeTask}
                        value={task}
                      />
                      <br />
                      <br />
                      <IconButton
                        className={classes.button}
                        disabled={!props.new && !edit}
                        onClick={() => {
                          if (props.new) {
                            props.handleAddNotecard(title, task)
                            setTask('')
                            setTitle('')
                          } else {
                            handleEditNotecard(title, task, id)
                            setTask(task)
                            setTitle(title)
                            setId(id)
                            setEdit(false)
                          }
                        }}
                        edge='end'
                        aria-label='save'
                      >
                        <SaveIcon />
                      </IconButton>

                      <IconButton
                        disabled={props.new}
                        className={classes.button}
                        onClick={() => {
                          props.handleDeleteNotecard(props.id)
                        }}
                        edge='end'
                        aria-label='delete'
                        // onChange={handleDeleteNotecard}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        disabled={props.new}
                        className={classes.button}
                        onClick={() => {
                          setEdit(true)
                        }}
                        edge='end'
                        aria-label='edit'
                        onChange={handleEditNotecard}
                      >
                        <EditIcon />
                      </IconButton>
                    </CardContent>
                  </Card>
                </>
              )
            })}
            {props.new ? (
              <ListItem>
                {/* <IconButton
                  color="secondary"
                  aria-label="add a notecard"
                  className={classes.top}
                  onClick={handleNewNotecard}
                >
                  <AddIcon style={{ fontSize: 20 }} />
                </IconButton> */}
              </ListItem>
            ) : (
              <div></div>
            )}
          </>
        )
      })}
    </List>
  )
}
