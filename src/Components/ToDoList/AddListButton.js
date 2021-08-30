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
}));

export default function AddListButton(props) {
  const classes = useStyles();
  const [check, setCheck] = React.useState(false);
  const handleAddListButton = () => {
    props.setEdit(false);
    // console.log(props.input);
    if (!props.edit) {
      props.setInput({
        name: props.name,
        id: props.id,
        lists: props.todotasks,
      });
      const current = props.listNames.concat({
        name: props.name,
        id: props.id,
        lists: props.todotasks,
      });
      props.setListNames(current);
      console.log(props.listNames);
      props.setId(props.id + 1);
      props.setname("");
    }
    setCheck(true);
    props.setaddListButton(true);
    props.setCount([]);
    props.setname("");
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="secondary"
        aria-label="add an alarm"
        className={classes.top}
        onClick={handleAddListButton}
      >
        <AddCircleIcon style={{ fontSize: 60 }} />
      </IconButton>
    </div>
  );
}
