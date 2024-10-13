import { Link, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";


function LocNowSubPengumuman () {
    const [pengumuman, setPengumuman] = useState([]);
    const { id } = useParams(); // Mengambil ID dari parameter URL
    useEffect(() => {
        // Misalnya ini API untuk mengambil data produk
        fetch(`http://localhost:5000/pengumuman/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Misalnya Anda hanya mengambil produk pertama dari hasil API
                setPengumuman(data); // Jika hanya satu produk, ambil langsung data[0]
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
                    <Link to="/pengumuman" className="link_politik_now">
                        <span>Pengumuman</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to={`/pengumuman/${pengumuman.id}`} className="link_politik_now">
                        <span>{pengumuman.name_pengumuman}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LocNowSubPengumuman;