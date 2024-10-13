import ComponentLaporan from "../component/ComponentLaporan";
import Footer from "../component/Footer";
import LocNow from "../component/LocNow";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";
import PolitikLeft from "../component/PolitikLeft";
import PolitikRight from "../component/PolitikRight";

function PagesPolitik () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNow />
            <ComponentLaporan />
            <Footer />
        </>
    );
}

export default PagesPolitik;