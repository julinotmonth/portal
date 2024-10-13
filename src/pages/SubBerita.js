import { ScrollRestoration } from "react-router-dom";
import ContentBerita from "../component/ContentBerita";
import Footer from "../component/Footer";
import LocNowSubHukum from "../component/LocNowSubHukum";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function SubBerita () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowSubHukum />
            <ContentBerita />
            <Footer />
        </>
    );
}

export default SubBerita;