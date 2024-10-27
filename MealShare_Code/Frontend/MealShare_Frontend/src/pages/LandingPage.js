import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Navbar from "../components/navbar";
import bgimage from "../assets/imgs/bgimage.avif";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e63",
    },
    background: {
      default: "transparent",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        },
      },
    },
  },
});

const HomePage = () => {
  return React.createElement(
    ThemeProvider,
    { theme: theme },
    React.createElement(CssBaseline),
    React.createElement(
      Box,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100vw",
          bgcolor: "rgba(0, 0, 0, 0.7)",
          color: "text.primary",
          overflow: "hidden",
        },
      },
      React.createElement(Navbar),
      React.createElement(
        Container,
        {
          maxWidth: false,
          sx: {
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            py: 4,
          },
        },
        React.createElement(
          Typography,
          {
            variant: "h2",
            component: "h1",
            gutterBottom: true,
            align: "center",
            sx: { maxWidth: "md", mx: "auto", fontWeight: "bold" },
          },
          "Bridging Abundance to Nourish Communities"
        ),
        React.createElement(
          Typography,
          {
            variant: "h5",
            align: "center",
            sx: { mb: 4, maxWidth: "md", mx: "auto" },
          },
          "Together, we're not just reducing waste—we're restoring hope, one meal at a time."
        ),
        React.createElement(
          Box,
          { sx: { "& > :not(style)": { m: 1 } } },
          React.createElement(
            Button,
            {
              variant: "contained",
              color: "primary",
              size: "large",
              endIcon: React.createElement(ArrowForward),
              sx: { borderRadius: "50px", px: 3 },
            },
            "I AM A FOOD DONOR"
          ),
          React.createElement(
            Button,
            {
              variant: "outlined",
              color: "primary",
              size: "large",
              endIcon: React.createElement(ArrowForward),
              sx: { borderRadius: "50px", px: 3 },
            },
            "I AM A FOOD CONSUMER"
          )
        )
      )
    )
  );
};

export default HomePage;
