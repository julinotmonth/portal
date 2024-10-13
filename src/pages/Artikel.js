import ComponentArtikel from "../component/ComponentArtikel";
import Footer from "../component/Footer";
import LocNowArtikel from "../component/LocNowArtikel";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function Artikel () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowArtikel />
            <ComponentArtikel />
            <Footer />
        </>
    );
}

export default Artikel;