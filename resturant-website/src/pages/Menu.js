import React from 'react'
import { MenuList } from "../data/data";
import Layout from "./../components/layout/Layout";
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const Menu = () => {
    return (
        <Layout>
            <Box sx={{ display: "flex", flexwrap: "Wrap" , justifyContent:"center" }}>
                {MenuList.map((menu) => (
                    <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ minHeight: "400px" }}
                                component={"img"}
                                src={menu.Image}
                                alt={menu.name}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterButton component={"div"}>
                                    {menu.name}

                                </Typography >
                                <Typography variant="body2"> {menu.discripton}

                                </Typography>

                            </CardContent>



                        </CardActionArea>
                    </Card>
                )
                )
                }

            </Box>

        </Layout>
    );
};

export default Menu;