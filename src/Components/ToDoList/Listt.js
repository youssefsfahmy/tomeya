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

export default function Listt(props) {
  const classes = useStyles();
 
  const onDelete = (index) => {
    props.setArrayOfTodo(
      props.arrayOfTodo
        .slice(0, index)
        .concat(props.arrayOfTodo.slice(index + 1))
    );
    props.setSelected({
      id:0,
      title:"",
      list:[]
    })
  };
  const onEdit = (index) => {
     props.setSelected({
      id: props.arrayOfTodo[index].id,
      title: props.arrayOfTodo[index].title,
      list: props.arrayOfTodo[index].list,
    });
    props.setIndex(index);
    //console.log(props.selected.id);

   // console.log(index);
   
  // props.setEdit(true);
  };
 
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {props.arrayOfTodo.map((elem, index) => {
          return (
            <ListItem
              button
              id={index}
              onClick={() => {
                onEdit(index);
              }}
            >
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
              {elem.title}
            </ListItem>
          );
        })}
      </List>{" "}
    </div>
  );
}
