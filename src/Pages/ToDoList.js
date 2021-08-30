import React from "react";
import Edit from "../Components/ToDoList/Edit";
import AddListButton from "../Components/ToDoList/AddListButton";
import ListBox from "../Components/ToDoList/ListBox";
import Listt from "../Components/ToDoList/Listt";
export default function ToDoList() {
  const [addListButton, setaddListButton] = React.useState(false);
  const [count, setCount] = React.useState([]);
  //const [namesCheck, setnamesCheck] = React.useState(0);
  const [listNames, setListNames] = React.useState([]);
  const [name, setname] = React.useState("");
  const [input, setInput] = React.useState({
    name: "",
    id: 0,
    lists: [],
  });
  const [todotasks, settodotasks] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [edit, setEdit] = React.useState(false);
  const [toEdit, setToEdit] = React.useState({});

  return (
    <>
      <Listt
        input={input}
        setInput={setInput}
        listNames={listNames}
        setListNames={setListNames}
        setname={setname}
        settodotasks={settodotasks}
        setCount={setCount}
        setToEdit={setToEdit}
        setEdit={setEdit}
      />
      <AddListButton
        edit={edit}
        setEdit={setEdit}
        setaddListButton={setaddListButton}
        addListButton={addListButton}
        count={count}
        setCount={setCount}
        listNames={listNames}
        setListNames={setListNames}
        input={input}
        setInput={setInput}
        todotasks={todotasks}
        settodotasks={settodotasks}
        id={id}
        setId={setId}
        name={name}
        setname={setname}
      />
      {!edit ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ListBox
            count={count}
            setCount={setCount}
            listNames={listNames}
            setListNames={setListNames}
            input={input}
            setInput={setInput}
            todotasks={todotasks}
            settodotasks={settodotasks}
            id={id}
            setId={setId}
            name={name}
            setname={setname}
          />
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Edit
            count={count}
            setCount={setCount}
            listNames={listNames}
            setListNames={setListNames}
            input={input}
            setInput={setInput}
            todotasks={todotasks}
            settodotasks={settodotasks}
            id={id}
            setId={setId}
            name={name}
            setname={setname}
          />
        </div>
      )}
    </>
  );
}
