import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import AddCircleIcon from "@material-ui/icons/AddCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  top: {
    marginTop: "16vw",
    marginLeft: "87vw",
  },
}));

export default function AddListButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        className={classes.top}
      >
        <AddCircleIcon style={{ fontSize: 60 }} />
      </IconButton>
    </div>
  );
}
