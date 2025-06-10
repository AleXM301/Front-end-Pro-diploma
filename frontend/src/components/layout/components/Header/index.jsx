import style from './Header.module.css'
import {NavLink,useLocation} from "react-router";
const  Header =()=> {


const {pathname} = useLocation()

console.log(pathname)



return (
    <header className={`${style.header} ${pathname === `/` ? style.header_home : null } ` }>
    <h1>Header</h1>

        <nav className={ style.header_nav}>
            <NavLink to={"/"}> Home</NavLink>
            <NavLink to={"/hotels"}> Hotels</NavLink>
            <NavLink to={"/about"}> About</NavLink>
        </nav>

        <p> qqq</p>

    </header>
)
}
export default Header