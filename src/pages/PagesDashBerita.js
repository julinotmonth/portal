import Footer from "../component/Footer"
import BeritaDashboard from "../component/BeritaDashboard";
import NavbarDash from "../component/NavbarDash";
import NavbarHome from "../component/NavbarHome";

function PagesDashBerita () {
    return (
        <>
            <NavbarHome />
            <NavbarDash />
            <BeritaDashboard />
            <Footer />
        </>
    );
}

export default PagesDashBerita;