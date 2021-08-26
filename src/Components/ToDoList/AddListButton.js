import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ListScroller from "./ListScroller";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  top: {
    marginTop: "36vw",
    marginLeft: "90vw",
  },
}));

export default function AddListButton(props) {
  const classes = useStyles();

  const handleAddListButton = () => {
    props.setaddListButton(true);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        className={classes.top}
        onClick={handleAddListButton}
      >
        <AddCircleIcon style={{ fontSize: 60 }} />
      </IconButton>
    </div>
  );
}
