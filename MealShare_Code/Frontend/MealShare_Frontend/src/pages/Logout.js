import React from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from 'appwrite'; // Adjust the import based on your setup

const LogoutPage = () => {
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

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LogoutPage;