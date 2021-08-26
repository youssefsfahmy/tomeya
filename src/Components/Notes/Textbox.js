import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Upload from "../Notes/Upload";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Textbox() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-textarea"
          label="My Notes"
          placeholder="Enter.."
          multiline
          variant="outlined"
          InputProps={{
            startAdornment: <Upload />,
          }}
          onFocus={() => console.log("IN")}
          onBlur={() => console.log("OUT")}
        ></TextField>
      </div>
    </form>
  );
}
