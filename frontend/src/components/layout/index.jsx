import Header from "@components/layout/components/Header";
import Footer from "@components/layout/components/Footer";

import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;