import ContentPengumuman from "../component/ContentPengumuman";
import Footer from "../component/Footer";
import LocNowSubPengumuman from "../component/LocNowSubPengumuman";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function SubPengumuman () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowSubPengumuman />
            <ContentPengumuman />
            <Footer />
        </>
    );
}

export default SubPengumuman;