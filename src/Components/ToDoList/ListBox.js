import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import axios from "axios";

let counter = 1;

const useStyles = makeStyles((theme) => ({
  root1: {
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: "38vw"
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
    marginLeft: "30vw",
    left: "25vw"
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
export default function ListBox(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  // console.log(props.arrayOfTodo[props.index].title);
  const [item, setItem] = React.useState("");
  //console.log(props.selected.title)
  const [title, setTitle] = React.useState("");
  console.log(title);
  const [list, setList] = React.useState([]);
  //  if(!(props.index==100)){
  // setTitle(props.arrayOfTodo[props.index].title);
  //  setList(props.arrayOfTodo[props.index].list);}

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleItem(e) {
    setItem(e.target.value);
  }
  function handleAddItem() {
    setItem("");
    setList(list.concat({ detail: item, checked: false }));
    //{headers:{'token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmlhbUBtYWlsLmNvbSIsImlkIjoiNjEzNzIxNjkzMmFkZWM5ZGU4NDExNTA4IiwiaWF0IjoxNjMxMDAzODE5LCJleHAiOjE2MzEwMjE4MTl9.tggYXhELaflwEaDXR2r1C9i3YQS-c7G6J1ekfNdpfBI"}}
    // axios.post('http://localhost:3000/lists/addtask',item)
    // .then(res=>console.log(res.data)).catch((error)=>{
    //     console.log(error)
    // });
  }

 // console.log(props.arrayOfTodo[props.index].title);
  // const [item, setItem] = React.useState("");
  //console.log(props.selected.title)
  // const [title, setTitle] = React.useState("");
  console.log(title)
    // const [list, setList] = React.useState([]);
  //  if(!(props.index==100)){
  // setTitle(props.arrayOfTodo[props.index].title);
  //  setList(props.arrayOfTodo[props.index].list);}

  function handleTitle(e) {
    
    setTitle(e.target.value);
    
  }

  function handleItem(e) {
    setItem(e.target.value);
  }
  function handleAddItem() {
    setItem("");
    setList(list.concat({ detail: item, checked: false }));
  }
  const handleToggle = (value) => () => {
    var currentIndex = list.indexOf(value);
    const newList = [...list];
    var currentItem = newList[currentIndex];
    currentItem.checked = !currentItem.checked;
    newList.splice(currentIndex, 1, currentItem);
    setChecked(newList);
  };

  function handleSave() {
    let newItem;
    const headers = window.localStorage.getItem("token");
    console.log(props.index);
    if (props.index == 100) {
       newItem = { id: props.id, title: title, list: list };
      props.setId(props.id + 1);
      props.setArrayOfTodo(props.arrayOfTodo.concat(newItem));
      axios
        .post("http://localhost:3000/lists/createlist", newItem,{headers:{token:headers

      } })
        .then((res) => console.log("new"))
        .catch((error) => {
          console.log(error);
        });
    } else {
       newItem = { id: props.index, title: title, list: list };
      console.log(newItem.id);
      props.arrayOfTodo[props.index] = newItem;
      props.setArrayOfTodo(props.arrayOfTodo);

      axios
        .post("http://localhost:3000/lists/editlist", newItem, {headers:{token:headers

      } })
        .then((res) => console.log("edit"))
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(newItem);

    console.log(props.arrayOfTodo);
    setTitle("");
    setList([]);
    setItem("");
    props.setIndex(100);
  }

  // const handleAddNewItem = () => {
  //   if (newItem) {
  //     console.log(listItem);
  //     const current = props.todotasks.concat(listItem);

  //     props.settodotasks(current);

  //     console.log(props.todotasks);
  //   }
  //   console.log(newItem);
  //   setNewItem(true);
  //   counter = counter + 1;
  //   props.count.push(counter);
  // };
  // const onChangeNames = (e) => {
  //   props.setname(e.target.value);
  // };
  // const onChangeList = (e) => {
  //   setlistItem(e.target.value);
  //   //console.log(listItem);
  // };
  useEffect(() => {
    setTitle(props.selected.title);
    console.log(title);
    setList(props.selected.list);
  }, [props.selected]);

  
  return (
    <>
      {" "}
      
      <Card className={classes.root2}>
        <form noValidate autoComplete="off">
          <Input
            placeholder="Enter your to-do list name"
            inputProps={{ "aria-label": "description" }}
            onChange={handleTitle}
            value={title}
          />
        </form>

        <List className={classes.root}>
          {list.map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
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
                    checked={value.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.detail} />
              </ListItem>
            );
          })}
          <ListItem
            role={undefined}
            dense
            button
            // onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                //checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                disabled
                // inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <Input
              placeholder="Enter new to do"
              inputProps={{ "aria-label": "description" }}
              onChange={handleItem}
              value={item}
            />{" "}
            <ListItemSecondaryAction onClick={handleAddItem}>
              <IconButton edge="end" aria-label="comments">
                <AddIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </ListItem>
        </List>
      </Card>
    </>
  );
}
