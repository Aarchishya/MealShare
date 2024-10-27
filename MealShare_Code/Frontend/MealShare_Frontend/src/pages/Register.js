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
  Grid,
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

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    role: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      city: "",
      role: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

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

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      isValid = false;
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
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
            mb: 4,
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
            "Register"
          ),
          React.createElement(
            "form",
            {
              onSubmit: handleSubmit,
              style: { width: "100%" },
            },
            // Name Field
            React.createElement(TextField, {
              required: true,
              fullWidth: true,
              label: "Name",
              name: "name",
              value: formData.name,
              onChange: handleChange,
              error: !!errors.name,
              helperText: errors.name,
              sx: { mb: 2 },
            }),
            // Email Field
            React.createElement(TextField, {
              required: true,
              fullWidth: true,
              label: "Email Address",
              name: "email",
              type: "email",
              value: formData.email,
              onChange: handleChange,
              error: !!errors.email,
              helperText: errors.email,
              sx: { mb: 2 },
            }),
            // Password Field
            React.createElement(TextField, {
              required: true,
              fullWidth: true,
              label: "Password",
              name: "password",
              type: "password",
              value: formData.password,
              onChange: handleChange,
              error: !!errors.password,
              helperText: errors.password,
              sx: { mb: 2 },
            }),
            // Confirm Password Field
            React.createElement(TextField, {
              required: true,
              fullWidth: true,
              label: "Confirm Password",
              name: "confirmPassword",
              type: "password",
              value: formData.confirmPassword,
              onChange: handleChange,
              error: !!errors.confirmPassword,
              helperText: errors.confirmPassword,
              sx: { mb: 2 },
            }),
            // Address and City in same row
            React.createElement(
              Grid,
              {
                container: true,
                spacing: 2,
                sx: { mb: 2 },
              },
              React.createElement(
                Grid,
                { item: true, xs: 7 },
                React.createElement(TextField, {
                  required: true,
                  fullWidth: true,
                  label: "Address",
                  name: "address",
                  multiline: true,
                  rows: 2,
                  value: formData.address,
                  onChange: handleChange,
                  error: !!errors.address,
                  helperText: errors.address,
                })
              ),
              React.createElement(
                Grid,
                { item: true, xs: 5 },
                React.createElement(TextField, {
                  required: true,
                  fullWidth: true,
                  label: "City",
                  name: "city",
                  value: formData.city,
                  onChange: handleChange,
                  error: !!errors.city,
                  helperText: errors.city,
                })
              )
            ),
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
              "Register"
            )
          )
        )
      )
    )
  );
};

export default RegisterPage;
