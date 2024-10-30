/*import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import LogoutPage from "./pages/Logout"; // Adjust the path as necessary
import LandingPage from "./pages/LandingPage";

const DashboardPage = () => {
    return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logout" element={<LogoutPage />} />
    </Routes>
    );
};

export default DashboardPage;*/


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from 'appwrite'; // Adjust the import based on your setup
import { Box, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';

const DashboardPage = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await account.deleteSession('current'); // Delete the current session
            console.log("Logout successful");
            alert("You have been logged out successfully.");
            navigate('/'); // Navigate back to the home page
        } catch (error) {
            console.log("Logout failed:", error);
            alert("Logout failed: " + error.message);
        }
    };

    return React.createElement(
        Box,
        { sx: { "& > :not(style)": { m: 1 } } },
        React.createElement(
          Button,
          {
            variant: "contained",
            color: "primary",
            size: "large",
            endIcon: React.createElement(ArrowForward),
            onClick: {handleLogout},
            sx: { borderRadius: "50px", px: 3 },
            
          },
          "Logout"
        )
      );
};

export default DashboardPage;