import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { SwipeableDrawer } from "@material-ui/core";
import { AppbarStyles } from "./AppbarStyles";
import { blue } from "@material-ui/core/colors";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};


export default function Appbar(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const classes = AppbarStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar className={classes.AppbarBg}>
                    <Toolbar>
                        <Box width="90%" mx={"auto"}>
                           <h2>HNazmul.Dev</h2>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <SwipeableDrawer onClose={() => setIsDrawerOpen(!isDrawerOpen)} onOpen={() => setIsDrawerOpen(!isDrawerOpen)} anchor={"left"} open={isDrawerOpen}>
                    <h1>hello this is my site bar</h1>
                </SwipeableDrawer>
                <Box my={2}>
                    {[...new Array(40)].map(() => (
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae, libero cum optio saepe dolores aperiam alias dignissimos? Autem, sequi?</p>
                    ))}
                </Box>
            </Container>
        </React.Fragment>
    );
}
