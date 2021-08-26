import { React, useEffect, useState } from "react";
import Textbox from "../Components/Notes/Textbox";
import Notepad from "../Components/Notes/Notepad";

export default function Notes() {
  const [addNotes, setAddNotes] = useState(-1);

  return (
    <div>
      <Textbox />
    </div>
  );
}
