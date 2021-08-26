import React, { useState, useEffect } from "react";
import Buttons from "../Components/Home/Buttons";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  const [button, setButton] = useState(-1);
  useEffect(() => {
    if (button === 1) {
      history.push("/todolist");
    } else if (button === 0) {
      history.push("/notes");
    }
  }, [button]);

  return (
    <div>
      <h1> Hey xxx/xx!</h1>
      <p1>
        What is TO-meya ?<br />
        <br />
        Simply , To-meya helps you to quickly take and save your notes, and
        checklists to access them again.
        <br />
        It's ideal for quick note-taking on the go, anyone who appreciates
        simple, fast note-taking tools or to-do apps, <br /> or for saving notes
        that you know you'll need, like shopping lists, addresses, phone
        numbers, checklists and to-do lists, or conference call codes.
        <br />
        <br />
        <br /> Now, Lets organize your thoughts!
        <br />
        <br />
      </p1>

      <Buttons setButton={setButton} />
    </div>
  );
}
