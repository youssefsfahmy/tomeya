import React from "react";
import Scroll from "../Components/ToDoList/Scroll";
import AddListButton from "../Components/ToDoList/AddListButton";
import ListBox from "../Components/ToDoList/ListBox";

import { makeStyles } from "@material-ui/core/styles";
import tom from "./tomeyaa-03.png";
const useStyles = makeStyles({
  // background: {
  //   backgroundImage: `url(${tom})`,
  // },
  root: {
    width: "100vw",
    height: "150vw",
    backgroundImage: `url(${tom})`,
  },
});

export default function ToDoList() {
  const classes = useStyles();
  const [addListButton, setaddListButton] = React.useState(false);
  return (
    <div className={classes.root}>
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
