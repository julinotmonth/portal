import ContentBerita from "../component/ContentBerita";
import ContentBeritaHukum from "../component/ContentBeritaHukum";
import Footer from "../component/Footer";
import LocNowSub from "../component/LocNowSub";
import LocNowSubHukum from "../component/LocNowSubHukum";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function BeritaHukum () {
    return (
        <>
            <NavbarHome />
            <div className="stiky">
                <NavbarHome2 />
            </div>
            <LocNowSubHukum />
            <ContentBeritaHukum />
            <Footer />
        </>
    );
}

export default BeritaHukum;