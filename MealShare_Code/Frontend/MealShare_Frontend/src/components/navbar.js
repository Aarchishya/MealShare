import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return React.createElement(
    AppBar,
    {
      position: "static",
      color: "transparent",
      elevation: 0,
      sx: {
        width: "100%",
        mt: 2,
        bgcolor: "rgba(18, 18, 18, 0.8)",
        backdropFilter: "blur(8px)",
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
          sx: {
            fontWeight: "bold",
            cursor: "pointer",
          },
          onClick: () => navigate("/"),
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
            onClick: () => navigate("/login"),
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
            onClick: () => navigate("/register"),
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
