import React from "react";
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
  
  const [index, setIndex] = React.useState(100);
  return (
    <div>
      <AddListButton setSelected={setSelected}   setIndex={setIndex}/>

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
  );
}
