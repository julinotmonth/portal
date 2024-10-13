import Footer from "../component/Footer";
import LocNowWhistle from "../component/LocNowWhistle";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function Whistle () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowWhistle />
            <Footer />
        </>
    );
}

export default Whistle;