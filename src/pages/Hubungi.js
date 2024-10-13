import ContentHubungi from "../component/ContentHubungi";
import Footer from "../component/Footer";
import LocNowHubungi from "../component/LocNowHubungi";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function Hubungi () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowHubungi />
            <ContentHubungi />
            <Footer />
        </>
    );
}

export default Hubungi;