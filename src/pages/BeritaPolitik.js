import ContentBerita from "../component/ContentBerita";
import Footer from "../component/Footer";
import LocNowSub from "../component/LocNowSub";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function BeritaPolitik () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowSub />
            <ContentBerita />
            <Footer />
        </>
    );
}

export default BeritaPolitik;