import { useEffect } from "react";
import React from "react";
import AddListButton from "../Components/ToDoList/AddListButton";
import ListBox from "../Components/ToDoList/ListBox";
import Listt from "../Components/ToDoList/Listt";
import axios from "axios";
export default function ToDoList() {
  const [id, setId] = React.useState(0);
  const [arrayOfTodo, setArrayOfTodo] = React.useState([]);
  const [selected, setSelected] = React.useState({
   //_id:0,
    title: "",
    tasks: [],
  });
  const headers = window.localStorage.getItem("token");
  useEffect (async() => {
   await axios
      .post(
        "http://localhost:3000/lists/viewListNames",
        {},

        { headers: { token: headers } }
      )
      .then((res) => setArrayOfTodo(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // console.log(arrayOfTodo, "ballalalala");
  // console.log(window.localStorage.getItem("token"));
  const [index, setIndex] = React.useState(100);
  return (
    <div>
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
  );
}
