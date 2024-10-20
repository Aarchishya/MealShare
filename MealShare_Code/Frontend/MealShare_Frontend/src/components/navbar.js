import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return React.createElement(
    AppBar,
    {
      position: "static",
      color: "transparent",
      elevation: 0,
      sx: {
        width: "100%",
        mt: 3,
        bgcolor: "rgba(18, 18, 18, 0.8)", // Dark semi-transparent background
        backdropFilter: "blur(8px)", // Adds a blur effect
      },
    },
    React.createElement(
      Toolbar,
      {
        sx: {
          width: "100%",
          justifyContent: "space-between",
        },
      },
      React.createElement(
        Typography,
        {
          variant: "h6",
          component: "div",
          sx: { fontWeight: "bold" },
        },
        "Logo"
      ),
      React.createElement(
        Box,
        null,
        React.createElement(
          Button,
          {
            color: "inherit",
            sx: {
              mr: 1,
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
          "LOGIN"
        ),
        React.createElement(
          Button,
          {
            color: "inherit",
            sx: {
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            },
          },
          "REGISTER"
        )
      )
    )
  );
};

export default Navbar;
