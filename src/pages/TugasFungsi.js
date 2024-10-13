import ComponentTugas from "../component/ComponentTugas";
import Footer from "../component/Footer";
import LocNowTugas from "../component/LocNowTugas";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function TugasFungsi () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowTugas />
            <ComponentTugas />
            <Footer />
        </>
    );
}

export default TugasFungsi;