import Footer from "../component/Footer";
import ImgStruktur from "../component/ImgStruktur";
import LocNowStruktur from "../component/LocNowStruktur";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function StrukturOrganisasi () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowStruktur />
            <ImgStruktur />
            <Footer />
        </>
    );
}

export default StrukturOrganisasi;