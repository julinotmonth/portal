import ContentArtikel from "../component/ContentArtikel";
import Footer from "../component/Footer";
import LocNowSubArtikel from "../component/LocNowSubArtikel";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function SubArtikel () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowSubArtikel />
            <ContentArtikel />
            <Footer />
        </>
    );
}

export default SubArtikel;