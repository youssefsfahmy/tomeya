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
function handleAddNote() {}
export default function Upload(props) {
  const classes = useStyles();

  return (
    <div classNa me={classes.root}>
      {/* <Button onClick={() => handleAddNote()}>Add Note</Button> */}
    </div>
  );
}
