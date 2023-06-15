import React from 'react';
import Layout from "./../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
      <Layout>
      <Box sx={{
        my: 20,
        textAlign: "center",
        "& h4": {
          fontWeight:"bold",
          my: 2,
          fontsize:"2rem",
        }
      }}>
        <Typography variant="h4">
          Welcome To My Restaurant
         </Typography>
        <p>
          We are a CASAMATA restaurant in Los Angeles' Arts District serving contemporary cuisine rooted in Mexican culture. 
          Inspired by the Pacific coasts' culinary traditions, while celebrating seasonal Californian produce.

          Damian's beverage program focuses on artisanal spirits and mirrors its cuisine, letting the high quality ingredients shine.

</p>
      </Box>
      
    </Layout>
  );
};

export default About;