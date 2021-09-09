import React, { useState, useEffect, hasMargin, left } from "react";
import Buttons from "../Components/Home/Buttons";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles({
  title: {
    fontSize: "4vw",
    margintop: "7vw",
    marginLeft: "5vw",

  },
  left: {
    marginLeft: "5vw",
  },
  prag: {
    marginLeft: "5vw",
    fontSize: "1.49vw",
  },
});

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [button, setButton] = useState(-1);
  useEffect(() => {
    if (button === 1) {
      history.push("/todolist");
    } else if (button === 0) {
      history.push("/notes");
    }
  }, [button]);

const name = window.localStorage.getItem("name");

console.log(window.localStorage.getItem("token"))

  return (
    <div>
      <h1 className={classes.title}>Welcome back {name}! </h1>

      <p1 className={classes.paragraph}>
        <br />
        <h2 className={classes.left}>Now, lets organize your thoughts!</h2>
        <br />
        <br />
      </p1>
       
      <Buttons setButton={setButton} />
    </div>
  );
}
