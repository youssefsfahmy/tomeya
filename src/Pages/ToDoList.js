import React from "react";
import Scroll from "../Components/ToDoList/Scroll";
import AddListButton from "../Components/ToDoList/AddListButton";
import ListBox from "../Components/ToDoList/ListBox";

export default function ToDoList() {
  const [addListButton, setaddListButton] = React.useState(false);
  return (
    <div>
      <Scroll />
      {addListButton ? <p> jhgjug </p> : <div />}
      <ListBox />
      <AddListButton
        setaddListButton={setaddListButton}
        addListButton={addListButton}
      />
    </div>
  );
}
