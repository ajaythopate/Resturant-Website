import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)


    const handelDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }



    const drawer = (
        <Box onClick={handelDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography color={"goldenrod"}  variant="h6" component="div"
                sx={{ flexGrow: 1 }}>
                < FoodBankIcon />
                Prashad Resturant
            </Typography>

            <ul className="mobile-navigation">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>

                <li>
                    <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </Box>
    );
    return (
        <>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton color="inherit" area-label="open drawer" edge="start" sx={{
                            mr: 2,
                            display: { sm: "none" },
                        }}
                            onClick={handelDrawerToggle}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography color={"goldenrod"} variant="h6" component="div"
                            sx={{ flexGrow: 1 }}>
                            < FoodBankIcon />
                            PRASHAD Restaurant
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="navigation-menu">
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>

                                <li>
                                    <Link to={"/menu"}>Menu</Link>
                                </li>
                                <li>
                                    <Link to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer variant="temporary" open={mobileOpen}
                        onClose={handelDrawerToggle}
                        sx={{ display: { xs: ' block', sm: 'none' }, width: "200px" }}
                    >
                        {drawer}
                    </Drawer>

                </Box>
                <Toolbar />
            </Box>
        </>
    );
};

export default Header;