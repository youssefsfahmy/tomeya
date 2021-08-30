import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import Input from "@material-ui/core/Input";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";

let counter = 1;

const useStyles = makeStyles((theme) => ({
  root1: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: "38vw",
    },
  },
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    marginTop: "0vw",
  },
  root2: {
    width: "30vw",
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

// {   count.map(function(item, i){

// })}
export default function Edit(props) {
  const classes = useStyles();
  const [title, setTitle] = React.useState(props.input.name);
  const [lists, setLists] = React.useState(props.input.lists);

  const [checked, setChecked] = React.useState([0]);
  const [newItem, setNewItem] = React.useState(false);
  const [listItem, setlistItem] = React.useState("");
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAddNewItem = () => {
    if (newItem) {
      console.log(listItem);
      const current = props.todotasks.concat(listItem);

      props.settodotasks(current);

      console.log(props.todotasks);
    }
    console.log(newItem);
    setNewItem(true);
    counter = counter + 1;
    props.count.push(counter);
  };
  const onChangeNames = (e) => {
    props.setname(e.target.value);
    // const current = props.listNames.concat(name);
    // props.setListNames(current);
    // console.log(props.listNames);
    //console.log(props.input);
    // props.setListNames(props.listNames.push("asdf"));
    // console.log(props.listNames);
    // props.setListNames(props.listNames.concat([name]));
  };
  const onChangeList = (e) => {
    setlistItem(e.target.value);
    //console.log(listItem);
  };

  return (
    <>
      {" "}
      <Card className={classes.root2}>
        <form noValidate autoComplete="off">
          <Input
            placeholder="Enter your to-do list name"
            inputProps={{ "aria-label": "description" }}
            onChange={onChangeNames}
            value={title}
          />
        </form>

        <List className={classes.root}>
          {[0].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <>
                {lists.map((e) => {
                  return (
                    <>
                      <ListItem
                        key={value}
                        role={undefined}
                        dense
                        button
                        onClick={handleToggle(value)}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>

                        <Input
                          placeholder="e.g feed the dog"
                          inputProps={{ "aria-label": "description" }}
                          onChange={onChangeList}
                          value={e}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <RemoveIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>

                      {/* <input type="checkbox" checked={elem.isDone ? true : false} />
                  <p>{elem.name}</p> */}
                    </>
                  );
                })}
                <ListItem>
                  <IconButton
                    color="secondary"
                    aria-label="add an item"
                    className={classes.top}
                    onClick={handleAddNewItem}
                  >
                    <AddIcon style={{ fontSize: 20 }} />
                  </IconButton>
                </ListItem>
              </>
            );
          })}
        </List>
      </Card>
    </>
  );
}
