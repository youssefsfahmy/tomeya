import './App.css'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import ToDoList from './Pages/ToDoList'
import Notes from './Pages/Notes'
import Home from './Pages/Home'
import NavBar from './Components/General/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/home' component={Home} exact />
        <Route path='/' component={Login} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/todolist' component={ToDoList} exact />
        <Route path='/notes' component={Notes} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
