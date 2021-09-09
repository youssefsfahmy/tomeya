import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Alert } from '@material-ui/lab'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// useEffect(()=>{

// })

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright ©️ '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setError] = useState('')

  const [open, setOpen] = React.useState(false)

  // window.localStorage.setItem("token", null);
  // window.localStorage.setItem("name", null);
  console.log(window.localStorage)
  console.log(window.localStorage.getItem('token'), 'llls')
  console.log(window.localStorage.getItem('name'))

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const classes = useStyles()

  const emailChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const passwordChange = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const handleSignin = async (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/account/signin', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res)
        if (res.data.message) {
          setError(res.data.message)
          setOpen(true)
        }
        if (res.data.error) {
          setError(res.data.error)
          setOpen(true)
        }
        window.localStorage.setItem('token', res.headers.authtoken)
        window.localStorage.setItem('name', res.headers.name)
        console.log(window.localStorage.getItem('token'))
        console.log(window.localStorage.getItem('name'))

        // window.location = "/home";
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            onChange={emailChange}
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            onChange={passwordChange}
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSignin}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href='signup' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Container>
  )
}
