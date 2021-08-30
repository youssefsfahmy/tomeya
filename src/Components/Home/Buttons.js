import React from "react";

import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { green } from "@material-ui/core/colors";

const BootstrapButton = withStyles({
  root: {
    marginLeft: "10vw",
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6vw 12vw",
    border: "1vw solid",
    lineHeight: 1.5,
    backgroundColor: "#f5f3f4",
    borderColor: "#f5f3f4",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#f5f3f4",
      borderColor: "#f5f3f4",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#f5f3f4",
      borderColor: "#f5f3f4",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    list: {
      marginLeft: "6vw",
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: "black",
    backgroundColor: "#eaddd6",
    "&:hover": {
      backgroundColor: "#eaddd6",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0.3),
    height: "3vw",
    width: "10vw",
    // margin-left: 41vw;
    padding: "0vw",
    marginLeft: "5vw",
    // marginLeft: "35vw",
  },
  // do: {
  //   height: "3vw",
  //   width: "10vw",
  //   // margin-left: 41vw;
  //   padding: "0vw",
  //   marginLeft: "35vw",
  // },
  // big: {
  //   margin: theme.spacing(0.3),
  //   height: "3vw",
  //   width: "10vw",
  // },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div className={classes.big}>
      <ColorButton
        className={classes.do}
        onClick={() => {
          props.setButton(1);
        }}
        variant="contained"
        color="#e9e3e6"
        // className={classes.margin}
        className={classes.margin}
      >
        To-do List
      </ColorButton>
      {/* <ThemeProvider theme={theme}> */}
      <Button
        className={classes.list}
        onClick={() => {
          props.setButton(0);
        }}
        variant="contained"
        color="#eaddd6"
        className={classes.margin}
      >
        Notes
      </Button>
      {/* </ThemeProvider> */}
    </div>
  );
}
