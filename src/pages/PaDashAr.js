import ArtikelDash from "../component/ArtikelDash";
import Footer from "../component/Footer";
import NavbarDash from "../component/NavbarDash";
import NavbarHome from "../component/NavbarHome";

function PaDashAr () {
    return (
        <>
            <NavbarHome />
            <NavbarDash />
            <ArtikelDash />
            <Footer />
        </>
    );
}

export default PaDashAr;