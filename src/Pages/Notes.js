import { Backdrop } from "@material-ui/core";
import React from "react";
import Notecard from "../Components/Notes/Notecard";
import { makeStyles } from "@material-ui/core/styles";
import tom from "./tomeyaa-03.png";

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${tom})`,
  },
});
export default function Notes() {
  const classes = useStyles();

  const [notesArray, setNotesArray] = React.useState([]);
  const [newNotecard, setNewNotecard] = React.useState(0);
  const [IdCounter, setIdCounter] = React.useState(0);

  const handleChangeNotesArray = (event) => {
    setNotesArray(event.target.value);
  };
  const handleNewNotecard = (event) => {
    setNewNotecard(event.target.value);
  };
  //creating a notecard object and adding it to the array NotesArray
  const handleAddNotecard = (titleNotecard, textNotecard) => {
    var notecard = { id: IdCounter, title: titleNotecard, text: textNotecard };
    setNotesArray((prevArray) => [...prevArray, notecard]);
    setIdCounter(IdCounter + 1);
  };
  const handleDeleteNotecard = (id) => {
    console.log(id);
    console.log(notesArray);

    var temp = notesArray.filter((x) => x.id !== id);
    setNotesArray(temp);
  };
  return (
    <div className={classes.background}>
      <div
        className={classes.background}
        style={{ width: "100vw", justifyContent: "center", display: "flex" }}
      >
        <Notecard new={true} handleAddNotecard={handleAddNotecard} />
      </div>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "3vw",
        }}
      >
        {notesArray.map((d) => (
          <Notecard
            handleDeleteNotecard={handleDeleteNotecard}
            title={d.title}
            text={d.text}
            id={d.id}
            new={false}
          />
        ))}
      </div>
    </div>
  );
}
