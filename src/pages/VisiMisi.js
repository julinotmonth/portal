import ContentVisiMisi from "../component/ContentVisiMisi";
import Footer from "../component/Footer";
import LocNowVisimisi from "../component/LocNowVisimisi";
import NavbarHome from "../component/NavbarHome";
import NavbarHome2 from "../component/NavbarHome2";

function VisiMisi () {
    return (
        <>
            <NavbarHome />
            <NavbarHome2 />
            <LocNowVisimisi />
            <ContentVisiMisi />
            <Footer />
        </>
    );
}

export default VisiMisi;