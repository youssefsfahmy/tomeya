import React from "react";
import Scroll from "../Components/ToDoList/Scroll";
import AddListButton from "../Components/ToDoList/AddListButton";
export default function ToDoList() {
  const [addListButton, setaddListButton] = React.useState(false);
  return (
    <div>
      <Scroll />
      <AddListButton
        setaddListButton={setaddListButton}
        addListButton={addListButton}
      />
      {addListButton ? <p> jhgjug </p> : <div />}
    </div>
  );
}
