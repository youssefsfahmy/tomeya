import React, { Componente } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import log from '../../logo.png'

// // import tom from "./tomeyaa-03.png";
// import m from "./logo.png";

// import lo from "../Components/General/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: '5',
    marginLeft: '-1vw',
    fontWeight: 'bold',
    fontSize: '1.7vw',
    color: 'white',
  },
  backColor: {
    // backgroundColor: "#cebbaf",
    backgroundColor: '#b1a7a6',
  },
  notesStyle: {
    // marginRight: "62vw",
    // marginLeft: "2vw",
  },
  toDoListStyle: {
    // marginLeft: "2vw",
    // fontSize: "1vw",
    // width: "2vw",
    // height: "2vw",
  },
  user: {
    // marginLeft: "6vw",
    marginLeft: '2vw',
    height: '3vw',
    width: '3vw',
  },
  // new: {
  //   backgroundImage: `url(${lo})`,
  //   width: "3vw",
  //   height: "3vw",
  // },
  b: {
    width: '3 vw',
    fontSize: '1vw',
    marginLeft: '2vw',
  },
  image: {
    width: '5vw',
    height: '5vw',
  },

  type: {
    marginRight: '53vw',
    fontSize: '1vw',
    marginLeft: '2vw',
    whiteSpace: 'nowrap',
  },
  new: {
    height: '2vw',
    backgroundImage: `url(${log})`,
  },
  logo: {
    image: `url(${log})`,
    height: '3vw',
    width: '3vw',
    marginLeft: '3vw',
  },
}))

export default function NavBar(props) {
  const classes = useStyles()
  const handleHome = (e) => {
    e.preventDefault()
    window.location = '/home'
  }
  const handleToDoList = (e) => {
    e.preventDefault()
    window.location = '/todolist'
  }
  const handleNotes = (e) => {
    e.preventDefault()
    window.location = '/notes'
  }
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.backColor}>
        <Toolbar>
          <div className={classes.new}></div>
          <img src={log} className={classes.logo}></img>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='white'
            aria-label='menu'
          >
            {' '}
          </IconButton>
          <h1 variant='h6' className={classes.title} onClick={handleHome}>
            To-Meya
          </h1>
          <div className={classes.type}>
            <Button className={classes.b} color='inherit' onClick={handleHome}>
              Home
            </Button>
            <Button
              color='inherit'
              className={(classes.toDoListStyle, classes.b)}
              onClick={handleToDoList}
            >
              To-Do List
            </Button>
            <Button
              color='inherit'
              className={(classes.notesStyle, classes.b)}
              onClick={handleNotes}
            >
              Notes
            </Button>
          </div>
          <AccountCircleIcon className={classes.user} />
        </Toolbar>
      </AppBar>
    </div>
  )
}
