
import {NavLink, useLocation} from "react-router";
import {AppBar, Toolbar} from "@mui/material";

const Header = () => {


    const {pathname} = useLocation()

    console.log(pathname)
     const pos = pathname === "/" ? 'absolute'  : 'static'
    const color = pathname === "/" ? 'white' : 'black'
    const shadow = pathname === "/" ? 0  : 4

    return (
        <AppBar  position={pos} elevation={shadow}  sx={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', color: color, backgroundColor: 'transparent',
        shadowColor: shadow}}>
            <h1>Header</h1>
            <Toolbar component="nav" sx={{ gap:2}}>
                <NavLink to={"/"} > Home</NavLink>
                <NavLink to={"/hotels"} > Hotels</NavLink>
                <NavLink to={"/about"} > About</NavLink>
            </Toolbar>
        </AppBar>
    )
}
export default Header