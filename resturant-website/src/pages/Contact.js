import React from 'react';
import Layout from "./../components/layout/Layout";
import { Box, Paper, Table, TableContainer, TableRow, Typography, TableHead, TableCell } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 5, ml: 5, "& h4": { fontWeight: "bold", mb: 2 } }}>
                <Typography variant="h4">
                    Contact My Restaurant
                </Typography>
            </Box>
            <Box sx={{
                m: 3, width: "300px", ml:5,  "@media(max-width:600px)": {
                wdith: "50px",
            },}}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact table">
                       
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ bgcolor: "lightblue", color: "black", }} align="center"> Contact Details
                                        

                                    </TableCell>
                                </TableRow>
                        </TableHead>
                        <TableRow>
                            <TableCell>
                            <SupportAgentIcon sx={{ color: "red", pt: -1 }} /> 9999855878 

                            </TableCell>
                        </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <EmailIcon sx={{ color: "skyBlue", pt: -1 }} /> prashadresturaint@gmail.com

                                    </TableCell>
                                </TableRow>


                            
                        
                    </Table>
                </TableContainer>

            </Box>
        </Layout>
    );
};

export default Contact;