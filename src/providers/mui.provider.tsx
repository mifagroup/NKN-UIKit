"use client";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "nikan, nikan Fallback",
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#31D1B0",
      300: "#C3F5EB",
    },
    secondary: {
      main: "#D6D6D6",
      700: "#696969",
      600: "#545454",
      500: "#D6D6D6",
      400: "#7D7D7D",
      300: "#ECECEC",
      200: "#969696",
      100: "#F0F0F0",
      50: "#F5F5F5",
    },
    grey: {
      "800": "#323232",
    },
  },
});

import React from "react";

const MuiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiProvider;
