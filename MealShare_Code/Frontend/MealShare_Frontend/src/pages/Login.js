import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
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
import { Client, Account } from "appwrite"; // Import Appwrite
import conf from '../conf/conf.js';

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


const client = new Client();
const account = new Account(client);

client
  .setEndpoint(conf.appWriteUrl) // Your Appwrite endpoint
  .setProject(conf.appWriteProjectId); // Your project ID

const LoginPage = () => {
  const navigate = useNavigate();
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
  /*const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("Submitting login with:", formData);

        // Check if the user is already logged in
        const currentUser  = await account.get();
        console.log("Current user:", currentUser );
        alert("You are already logged in as " + currentUser .email);
        return; // Exit the function if the user is already logged in

        //const response = await account.createSession(formData.email);
        //const response = await account.create(formData.email, formData.password, formData.name);
        const response = await account.createEmailPasswordSession(formData.email, formData.password);
        console.log("Login successful:", response);
        alert("Login successful :)");
      } catch (error) {
        alert("Login failed :/");
        console.log("login failed :/", error);
        setErrors((prev) => ({ ...prev, email: "Login failed. Please check your credentials." }));
      }
      //console.log("Form submitted:", formData);
      // Add your login logic here
    }
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        console.log("Submitting login with:", formData);
        // Check if the user is already logged in
        const currentUser  = await account.get();
        console.log("Current user:", currentUser );
        alert("You are already logged in as " + currentUser .email);
        navigate('/dashboard'); // Redirect to dashboard if already logged in
        return; // Exit the function if the user is already logged in
        } catch (error) {
          // If there's an error fetching the current user, it means no active session
          if (error.code === 401) { // 401 Unauthorized error means no active session
            try {
              // Attempt to log in
              const response = await account.createEmailPasswordSession(formData.email, formData.password);
              console.log("Login successful:", response);
              alert("Login successful :)");
            } catch (loginError) {
              console.error("Login failed:", loginError);
              alert("Login failed: " + loginError.message);
              setErrors((prev) => ({ ...prev, email: "Login failed. Please check your credentials." }));
              }
            } else {
              console.error("Error checking current user:", error);
              alert("An error occurred while checking the current user.");
            }
        }
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
