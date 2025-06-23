import {NavLink, useLocation} from "react-router";
import {AppBar, Toolbar,} from "@mui/material";
import ROUTES from "@config/routes.js";

import styles from "./Header.module.css";

const Header = () => {
    
    const {pathname} = useLocation()
    const pos = pathname === "/" ? 'absolute' : 'static'
    const color = pathname === "/" ? 'white' : 'black'
    const shadow = pathname === "/" ? 0 : 4

    return (
        <AppBar className={styles.header} position={pos} elevation={shadow}
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    color: color,
                    backgroundColor: 'transparent',
                    shadowColor: shadow
                }}>
            <h1>Header</h1>
            <Toolbar component="nav" sx={{gap: 2}}>
                <NavLink className={styles[`header_link_${color}`]} to={ROUTES.HOME}> Home</NavLink>
                <NavLink className={styles[`header_link_${color}`]} to={ROUTES.HOTELS}> Hotels</NavLink>
                <NavLink className={styles[`header_link_${color}`]} to={ROUTES.ABOUT}> About</NavLink>
            </Toolbar>

        </AppBar>
    )
}
export default Header