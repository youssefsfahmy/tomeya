import { React, useEffect, useState } from "react";
import Textbox from "../Components/Notes/Textbox";

export default function Notes() {
  const [button, setButton] = useState(-1);
  useEffect(() => {
    if (button === 1) {
      console.log("mkfmk");
    } else if (button === 0) {
      console.log("kmdfmmd");
    }
  }, [button]);
  return (
    <div>
      <Textbox />
    </div>
  );
}
