import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EditIcon from "@material-ui/icons/Edit";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Listt(props) {
  const classes = useStyles();
  let id = 0;
  const onClickitem = (e) => {
    // let id = e.target.key;
    // id++;
    // console.log("Click");
    // console.log(e.target.id);
  };

  const onDelete = (index) => {
    //const current = props.listNames.splice(e.target.id, 1);
    console.log(props.listNames);
    console.log(index);
    props.setListNames(
      props.listNames.slice(0, index).concat(props.listNames.slice(index + 1))
    );
    console.log(props.listNames);
  };
  const onEdit = (index) => {
    props.setToEdit(props.listNames[index]);
    props.setEdit(false);
    props.setEdit(true);
    console.log("Edit");
    //  console.log(props.listNames[index]);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {props.listNames.map((elem, index) => {
          return (
            <ListItem button id={index} onClick={onClickitem}>
              <ListItemIcon
                button
                onClick={() => {
                  onDelete(index);
                }}
                id={index}
              >
                <DeleteIcon />
              </ListItemIcon>
              <ListItemIcon
                button
                id={index}
                onClick={() => {
                  onEdit(index);
                }}
              >
                <EditIcon id={index} />
              </ListItemIcon>
              {elem.name}
            </ListItem>
          );
        })}
      </List>{" "}
      ;
    </div>
  );
}
