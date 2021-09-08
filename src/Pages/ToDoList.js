import React, {useEffect } from "react";
import AddListButton from "../Components/ToDoList/AddListButton";
import ListBox from "../Components/ToDoList/ListBox";
import Listt from "../Components/ToDoList/Listt";
import axios from 'axios';
export default function ToDoList() {

  const [id, setId] = React.useState(0);
  const [arrayOfTodo, setArrayOfTodo] = React.useState([]);
  const [selected, setSelected] = React.useState({
    id: 0,
    title: "",
    list: [],
  });
  const [edit, setEdit] = React.useState(false);
  const [index, setIndex] = React.useState(100);

  const headers = window.localStorage.getItem("token");
  useEffect(() => {
    console.log(window.localStorage.getItem("token"))
    axios.post('http://localhost:5000/lists/viewListNames',{},
    {headers : {token:headers}}
    )
  .then((res) => setArrayOfTodo(res.data))
  .catch((error) => {
    console.log(error)
  }
  )})

  console.log(window.localStorage.getItem("token"))

  return (
    <div>
      <AddListButton setSelected={setSelected}  setIndex={setIndex}/>

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
        edit={edit}
        setIndex={setIndex}
        index={index}
      />
    </div>
  );
}
