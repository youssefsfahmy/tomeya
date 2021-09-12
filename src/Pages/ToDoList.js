import { useEffect } from 'react'
import React from 'react'
import AddListButton from '../Components/ToDoList/AddListButton'
import ListBox from '../Components/ToDoList/ListBox'
import Listt from '../Components/ToDoList/Listt'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import tom from './tomeyaa-03.png'
import { useHistory } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '150vw',
    backgroundImage: `url(${tom})`,
  },
})
export default function ToDoList() {
  const classes = useStyles()
  const [id, setId] = React.useState(0)
  const [arrayOfTodo, setArrayOfTodo] = React.useState([])
  const [selected, setSelected] = React.useState({
    //_id:0,
    title: '',
    tasks: [],
  })

  const history = useHistory()

  // useEffect(() => {
  //   console.log(window.localStorage,"dsfsdfsf");
  //   if(window.localStorage.getItem('token')== 'undefined'){
  //     console.log("its null")
  //     history.push('/')
  //   }
  // },[])


  const headers = window.localStorage.getItem('token')
  useEffect(async () => {
    await axios
      .post(
        'http://localhost:5000/lists/viewListNames',
        {},

        { headers: { token: headers } }
      )
      .then((res) => setArrayOfTodo(res.data))
      .catch((error) => {
        console.log(error)
      })
      if(window.localStorage.getItem('token')== 'undefined'){
        console.log("its null")
        history.push('/')
      }
  }, [id])

  // console.log(arrayOfTodo, "ballalalala");
  // console.log(window.localStorage.getItem("token"));
  const [index, setIndex] = React.useState(100)
  return (
    <div className={classes.root}>
      <AddListButton setSelected={setSelected} setIndex={setIndex} />

      <Listt
        arrayOfTodo={arrayOfTodo}
        setSelected={setSelected}
        setArrayOfTodo={setArrayOfTodo}
        setIndex={setIndex}
        index={index}
        selected={selected}
      />
      <ListBox
        id={id}
        setId={setId}
        arrayOfTodo={arrayOfTodo}
        setArrayOfTodo={setArrayOfTodo}
        setSelected={setSelected}
        selected={selected}
        setIndex={setIndex}
        index={index}
      />
    </div>
  )
}
