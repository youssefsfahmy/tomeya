import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Upload from "../Notes/Upload";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

let counter = 1;
let count = [
  {
    isDone: true,
    name: "Todo 1",
  },
  {
    isDone: false,
    name: "Todo 1",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Textbox() {
  const [addNotepad, setAddNotepad] = React.useState(false);

  const handleAddNotepad = () => {
    setAddNotepad(!addNotepad);

    counter = counter + 1;
    count.push(counter);
    console.log(counter);
    console.log(addNotepad);
  };
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
        <IconButton
          color="secondary"
          aria-label="add an item"
          className={classes.top}
          onClick={handleAddNotepad}
        >
          <AddIcon style={{ fontSize: 20 }} />
        </IconButton>
      </div>
    </form>
  );
}
