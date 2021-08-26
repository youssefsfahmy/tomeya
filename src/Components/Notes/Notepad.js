import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function Notepad() {
  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        label="Note"
        multiline
        rows={4}
        placeholder="e.g Walk the dog"
        variant="outlined"
      />
    </div>
  );
}
