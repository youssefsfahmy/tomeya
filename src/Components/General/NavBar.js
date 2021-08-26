import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 5,
  },
  backColor: {
    backgroundColor: "#cebbaf",
  },
  notesStyle: {
    marginRight: "62vw",
    marginLeft: "2vw",
  },
  toDoListStyle: {
    marginLeft: "2vw",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const handleHome = (e) => {
    e.preventDefault();
    window.location = "/home";
  };
  const handleToDoList = (e) => {
    e.preventDefault();
    window.location = "/todolist";
  };
  const handleNotes = (e) => {
    e.preventDefault();
    window.location = "/notes";
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.backColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="white"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            To-Meya
          </Typography>
          <Button color="inherit" onClick={handleHome}>
            Home
          </Button>
          <Button
            color="inherit"
            className={classes.toDoListStyle}
            onClick={handleToDoList}
          >
            To-Do List
          </Button>
          <Button
            color="inherit"
            className={classes.notesStyle}
            onClick={handleNotes}
          >
            Notes
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
