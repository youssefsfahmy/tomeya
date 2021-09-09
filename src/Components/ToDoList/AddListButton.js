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
    marginTop: "0vw",
    marginLeft: "87vw",
  },
  color: {
    color: "#cebbaf",
  },
}));

export default function AddListButton(props) {
  const classes = useStyles();
  const [check, setCheck] = React.useState(false);
  const handleAddListButton = () => {
 props.setSelected({
  id:0,
  title:"",
  tasks:[]
})
props.setIndex(100)
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        className={classes.top}
        onClick={handleAddListButton}
      >
        <AddCircleIcon style={{ fontSize: 60 }} className={classes.color} />
      </IconButton>
    </div>
  );
}
