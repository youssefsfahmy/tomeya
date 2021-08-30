import React, { useState, useEffect, hasMargin, left } from "react";
import Buttons from "../Components/Home/Buttons";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
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

  return (
    <div>
      <h1 className={classes.title}>Hey Nour!</h1>

      <h2 className={classes.left}>What is TO-meya ?</h2>
      <div className={classes.prag}>
        Simply , To-meya helps you to quickly take and save your notes, and
        checklists to access them again.
        <br />
        It's ideal for quick note-taking on the go, anyone who appreciates
        simple, fast note-taking tools or to-do apps, <br /> or for saving notes
        that you know you'll need, like shopping lists, addresses, phone
        numbers, checklists and <br /> to-do lists, or conference call codes.
        <br />
        <br />
      </div>
      <p1 className={classes.paragraph}>
        {/* <br />
        Simply , To-meya helps you to quickly take and save your notes, and
        checklists to access them again.
        <br />
        It's ideal for quick note-taking on the go, anyone who appreciates
        simple, fast note-taking tools or to-do apps, <br /> or for saving notes
        that you know you'll need, like shopping lists, addresses, phone
        numbers, checklists and to-do lists, or conference call codes.
        <br /> */}
        <br />
        <h2 className={classes.left}>Now, lets organize your thoughts!</h2>
        <br />
        <br />
      </p1>

      <Buttons setButton={setButton} />
    </div>
  );
}
