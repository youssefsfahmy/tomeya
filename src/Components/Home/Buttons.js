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
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
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
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
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
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: green,
  },
});

export default function Buttons(props) {
  const classes = useStyles();

  return (
    <div>
      <ColorButton
        onClick={() => {
          props.setButton(1);
        }}
        variant="contained"
        color="#eaddd6"
        className={classes.margin}
      >
        To-do List
      </ColorButton>
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            props.setButton(0);
          }}
          variant="contained"
          color="#eaddd6"
          className={classes.margin}
        >
          Notes
        </Button>
      </ThemeProvider>
    </div>
  );
}
