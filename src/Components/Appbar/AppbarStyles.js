

import { blue } from "@material-ui/core/colors";
import { fade, makeStyles } from "@material-ui/core/styles";





export const AppbarStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    AppbarBg:{
        background:blue[700]
    }
   
}));