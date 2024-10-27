import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
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

const LoginPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    role: "",
  });

  // Validate form fields
  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", role: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Role validation
    if (!formData.role) {
      newErrors.role = "Please select a role";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Add your login logic here
    }
  };

  return React.createElement(
    ThemeProvider,
    { theme },
    React.createElement(CssBaseline),
    React.createElement(
      Box,
      {
        sx: {
          minHeight: "100vh",
          width: "100vw",
          bgcolor: "rgba(0, 0, 0, 0.7)",
          color: "text.primary",
        },
      },
      React.createElement(Navbar),
      React.createElement(
        Container,
        {
          component: "main",
          maxWidth: "xs",
          sx: {
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        },
        React.createElement(
          Box,
          {
            sx: {
              p: 4,
              bgcolor: "rgba(18, 18, 18, 0.8)",
              backdropFilter: "blur(8px)",
              borderRadius: 2,
              width: "100%",
            },
          },
          React.createElement(
            Typography,
            {
              variant: "h4",
              component: "h1",
              gutterBottom: true,
              align: "center",
            },
            "Login"
          ),
          React.createElement(
            "form",
            {
              onSubmit: handleSubmit,
              style: { width: "100%" },
            },
            // Email Field
            React.createElement(TextField, {
              margin: "normal",
              required: true,
              fullWidth: true,
              label: "Email Address",
              name: "email",
              type: "email",
              value: formData.email,
              onChange: handleChange,
              error: !!errors.email,
              helperText: errors.email,
              autoComplete: "email",
              sx: { mb: 2 },
            }),
            // Password Field
            React.createElement(TextField, {
              margin: "normal",
              required: true,
              fullWidth: true,
              label: "Password",
              name: "password",
              type: "password",
              value: formData.password,
              onChange: handleChange,
              error: !!errors.password,
              helperText: errors.password,
              autoComplete: "current-password",
              sx: { mb: 3 },
            }),
            // Role Selection (moved to bottom)
            React.createElement(
              FormControl,
              {
                fullWidth: true,
                required: true,
                error: !!errors.role,
                sx: { mb: 3 },
              },
              React.createElement(InputLabel, null, "Role"),
              React.createElement(
                Select,
                {
                  value: formData.role,
                  label: "Role",
                  name: "role",
                  onChange: handleChange,
                },
                React.createElement(
                  MenuItem,
                  { value: "restaurant" },
                  "Restaurant"
                ),
                React.createElement(MenuItem, { value: "ngo" }, "NGO")
              ),
              errors.role &&
                React.createElement(
                  Typography,
                  {
                    variant: "caption",
                    color: "error",
                    sx: { ml: 2 },
                  },
                  errors.role
                )
            ),
            // Submit Button
            React.createElement(
              Button,
              {
                type: "submit",
                fullWidth: true,
                variant: "contained",
                color: "primary",
                size: "large",
                sx: { borderRadius: "50px" },
              },
              "Login"
            )
          )
        )
      )
    )
  );
};

export default LoginPage;
