import Footer from "../component/Footer";
import KumpulanVideo from "../component/KumpulanVideo";
import LocNowVideo from "../component/LocNowVideo";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function Video () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowVideo />
            <KumpulanVideo />
            <Footer />
        </>
    );
}

export default Video;