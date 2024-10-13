import ComponentBerita from "../component/ComponentBerita";
import Footer from "../component/Footer";
import LocNowBerita from "../component/LocNowBerita";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function Berita () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowBerita />
            <ComponentBerita />
            <Footer />
        </>
    );
}

export default Berita;