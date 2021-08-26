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
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    marginTop: "5vw",
  },
}));

export default function ListBox() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [newItem, setNewItem] = React.useState(true);

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
    setNewItem(!newItem);
  };

  return (
    <List className={classes.root}>
      {[0].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <>
            {newItem ? (
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
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ) : (
              <div />
            )}

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
  );
}
