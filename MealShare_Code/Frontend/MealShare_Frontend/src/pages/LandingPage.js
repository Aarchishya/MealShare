import React, { useRef } from 'react';
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
import image1 from "../assets/imgs/img1.avif";
import image2 from "../assets/imgs/img2.avif";
import image3 from "../assets/imgs/img3.avif";
import image6 from "../assets/imgs/img6.avif";
import { Pie } from 'react-chartjs-2'; // Import Pie chart from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend); // Register chart components


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
  const donorSectionRef = useRef(null);
  const consumerSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
   // Pie chart data
   const pieChartData = {
    labels: ['Over-preparation', 'Social Customs/Leftovers', 'Storage & Transportation issues'],
    datasets: [
      {
        data: [40, 30, 30], // Example data; replace with actual values
        backgroundColor: ['#c00d68', '#FB4C8D', '#D08097'],
        hoverBackgroundColor: ['#FF6384'],
      },
    ],
  };
 

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
              onClick: () => scrollToSection(donorSectionRef),
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
              onClick: () => scrollToSection(consumerSectionRef),
            },
            "I AM A FOOD CONSUMER"
          )
        )
      ),
      
      React.createElement(
        Box,
        {
          component: "img",
          src: image1, // Replace with the actual path of your image
          alt: "Decorative separator",
          sx: { width: "100%", height: "auto", mt: 16, bgcolor: "#1e1f20"},
        }
      ),
      // New Section for Infographic Content
      React.createElement(
        Box,
        {
          sx: {
            bgcolor: "#1e1f20",
            color: "#fff",
            py: 8,
            px: 4,
            alignItems: "center",
            mt: 0
          },
        },
      React.createElement(
        Typography,
        { variant: "h4", sx: { mb: 4, fontWeight: "bold", textAlign: "center" , bgcolor: "#1e1f20", mt:4 } },
        "FOOD WASTE IN INDIA"
      )
    ),
      React.createElement(
        Box,
        {
          sx: {
            bgcolor: "#1e1f20",
            color: "#fff",
            py: 8,
            px: 4,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 0
          },
        },
       
        React.createElement(
          Box,
          {
            sx: { py: 0, display: 'flex', justifyContent: 'center' , width: "100%"},
          },
          React.createElement(Pie, { data: pieChartData })
        ),
        /*
        React.createElement(
          Box,
          {
            component: "img",
            src: image2, // Adjust the path to your infographic image file
            alt: "Food Waste Infographic",
            sx: { width: "80%", maxWidth: "600px", mb: 2 },
          }
        ),
        */
        React.createElement(
          Typography,
          {
            variant: "body1",
            sx: { fontSize: "1.1rem", lineHeight: "1.8" },
          },
          `In India, it's estimated that around 15-20% of prepared food is wasted daily. This translates to approximately 10,000 to 12,000 tons of cooked food being discarded each day.

          The primary reasons for this waste include over-preparation, lack of awareness about food preservation, and social customs that encourage cooking more food than necessary. Additionally, issues related to storage and transportation can also contribute to the amount of cooked food that ends up being wasted.

          Reducing this waste could significantly benefit food security and sustainability in the country.`
        )
      ),
      React.createElement(
        Box,
        {
          ref: donorSectionRef,
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 2,
          },
        },
        React.createElement("img", {
          src: image3,
          alt: "Additional content image",
          style: { width: "80%", height: "auto", borderRadius: "8px" },
        })
      ),
      
      React.createElement(
        Box,
        { 
          ref: consumerSectionRef, 
          sx: {
           
            color: "#fff",
            py: 8,
            px: 4,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 2
          },
        },
        React.createElement(
          Box,
          {
            sx: {
              bgcolor: "#1e1f20",
              color: "#fff",
              py: 0,
              px: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mt: 2,
              mb:2
            },
          },
            React.createElement(
              'ul',
              null,
              React.createElement(
                Typography,
                { variant: 'h6' ,  sx: { fontWeight: "bold", textAlign: "center" , bgcolor: "#1e1f20"}},
                'You can be one of them!'
              ),
              
              null,
              React.createElement(
                'li',
                null,
                React.createElement(
                  Typography,
                  {
                    variant: 'body1',
                    sx: { fontSize: '1.1rem', lineHeight: '1.8' },
                  },
                  'Volunteers: Individuals who donate their time to serve meals, prepare food, or organize food drives.'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Typography,
                  {
                    variant: 'body1',
                    sx: { fontSize: '1.1rem', lineHeight: '1.8' },
                  },
                  'Nonprofit Organizations: NGOs dedicated to addressing hunger, such as food banks, shelters, and community kitchens, often have staff and volunteers working to distribute food.'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Typography,
                  {
                    variant: 'body1',
                    sx: { fontSize: '1.1rem', lineHeight: '1.8' },
                  },
                  'Social Workers: Professionals who assist those in need may help connect them with food resources.'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Typography,
                  {
                    variant: 'body1',
                    sx: { fontSize: '1.1rem', lineHeight: '1.8' },
                  },
                  'Faith-Based Groups: Churches, synagogues, mosques, and other religious organizations often run programs to feed the homeless.'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Typography,
                  {
                    variant: 'body1',
                    sx: { fontSize: '1.1rem', lineHeight: '1.8' },
                  },
                  'Community Organizations: Local groups may organize meal programs, food pantries, or community gardens to support those in need.'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Typography,
                  {
                    variant: 'body1',
                    sx: { fontSize: '1.1rem', lineHeight: '1.8' },
                  },
                  'Civic Groups: Clubs and societies often engage in charitable activities, including food distribution.'
                )
              ),
              React.createElement(
                'li',
                null,
                React.createElement(
                  Typography,
                  {
                    variant: 'body1',
                    sx: { fontSize: '1.1rem', lineHeight: '1.8' },
                  },
                  'Students and Youth Groups: Schools and youth organizations sometimes participate in service projects that involve providing food.'
                )
              )
        ),
        React.createElement(
          Box,
        {
          sx: {
            bgcolor: "#1e1f20",
            color: "#fff",
            py: 0,
            px: 0,
            display: "flex",
            flexDirection: "col",
            alignItems: "center",
            mt: 0
          },
        },
          React.createElement("img", {
          src: image6,
          alt: "Additional content image",
          style: { width: "100%", height: "auto", borderRadius: "8px" },
        })
      )
    )
  )
)
  );
};

export default HomePage;
