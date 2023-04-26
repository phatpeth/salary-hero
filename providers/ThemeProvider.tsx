import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { red, teal } from "@mui/material/colors";
import React from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: teal[500],
    },
    error: {
      main: red[500],
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
    },
    h2: {
      fontSize: "36px",
    },
  },
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
