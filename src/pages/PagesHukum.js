import Footer from "../component/Footer";
import HukumLeft from "../component/HukumLeft";
import LocNow from "../component/LocNow";
import LocNowHukum from "../component/LocNowHukum";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";
import PolitikLeft from "../component/PolitikLeft";
import PolitikRight from "../component/PolitikRight";

function PagesHukum () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowHukum />
            <HukumLeft />
            <Footer />
        </>
    );
}

export default PagesHukum;