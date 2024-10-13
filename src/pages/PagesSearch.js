import ComponentSearch from "../component/ComponentSearch";
import Footer from "../component/Footer"
import LocNowSearch from "../component/LocNowSearch";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function PagesSearch () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowSearch />
            <ComponentSearch />
            <Footer />
        </>
    );
}

export default PagesSearch;