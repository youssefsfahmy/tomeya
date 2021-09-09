import React, { useState, useEffect, hasMargin, left } from 'react'
import Buttons from '../Components/Home/Buttons'
import { useHistory } from 'react-router'
import tom from './tomeyaa-03.png'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100vw',
    height: '150vw',
    backgroundImage: `url(${tom})`,
  },
  title: {
    fontSize: '4vw',
    margintop: '7vw',
    marginLeft: '5vw',
  },
  left: {
    marginLeft: '5vw',
  },
  prag: {
    marginLeft: '5vw',
    fontSize: '1.49vw',
  },
})

export default function Home() {
  const classes = useStyles()
  const history = useHistory()
  const [button, setButton] = useState(-1)
  useEffect(() => {
    if (button === 1) {
      history.push('/todolist')
    } else if (button === 0) {
      history.push('/notes')
    }
  }, [button])

  const name = window.localStorage.getItem('name')

  console.log(window.localStorage.getItem('token'))

  return (
    <div div className={classes.root}>
      <h1 className={classes.title}>Hey Nour!</h1>

      <h2 className={classes.left}>What is to-meya ?</h2>
      <div className={classes.prag}>
        Simply , to-meya helps you to quickly take and save your notes, <br />{' '}
        and checklists to access them again. It's ideal for quick note-taking{' '}
        <br />
        on the go, anyone who appreciates simple, fast note-taking tools
        <br /> or to-do apps,or for saving notes that you know you'll need, like{' '}
        <br />
        shopping lists, addresses, phone numbers, checklists and to-do lists, or{' '}
        <br />
        conference call codes.
        <br />
        <br />
      </div>
      <p1 className={classes.paragraph}>
        <br />
        <h2 className={classes.left}>Lets organize your thoughts!</h2>
        <br />
        <br />
      </p1>

      <Buttons setButton={setButton} />
    </div>
  )
}
