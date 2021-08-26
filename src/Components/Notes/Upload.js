import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import AddCircleIcon from "@material-ui/icons/AddCircle";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function Upload(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => {
            props.setButton(1);
          }}
        >
          <AddCircleIcon />
        </IconButton>
      </label>
    </div>
  );
}
