import React from 'react'
import { Box, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
            <Box
                sx={{ textAlign: "center", bgcolor: "black", color: "white", p: 3 }}
            >
                <Box
                    sx={{
                        my: 3,
                        "& svg": {
                            fontSize: "60px",
                            cursor: "pointer",
                            mr: 2,
                        },
                    }}
                >
                    <TwitterIcon />
                    <InstagramIcon />
                    <GitHubIcon />
                </Box>
                <Typography variant="h5">
                    All Right Reserved &copy;
                </Typography>

            </Box>
        </>
    );

};

export default Footer;