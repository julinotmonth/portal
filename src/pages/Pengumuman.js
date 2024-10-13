import ComponentPengumuman from "../component/ComponentPengumuman";
import Footer from "../component/Footer";
import LocNowPengumuman from "../component/LocNowPengumuman";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function Pengumuman () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowPengumuman />
            <ComponentPengumuman />
            <Footer />
        </>
    );
}

export default Pengumuman;