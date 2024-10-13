import { Link, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";


function LocNowSubArtikel () {
    const [artikel, setArtikel] = useState([]);
    const { id } = useParams(); // Mengambil ID dari parameter URL
    useEffect(() => {
        // Misalnya ini API untuk mengambil data produk
        fetch(`http://localhost:5000/artikel/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Misalnya Anda hanya mengambil produk pertama dari hasil API
                setArtikel(data); // Jika hanya satu produk, ambil langsung data[0]
            })
            .catch((error) => console.error(error));
    }, [id]); 
    return (
        <div className="wadah_locnow">
            <div className="margin_kanankiri">
                <div className="wadah_all_locnow">
                    <Link to="/" className="link_home_antara">
                        <FaHome className="wadah_icon_home_locnow" />
                        <span>BERANDA</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to="/artikel" className="link_politik_now">
                        <span>Artikel</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to={`/artikel/${artikel.id}`} className="link_politik_now">
                        <span>{artikel.name_artikel}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LocNowSubArtikel;