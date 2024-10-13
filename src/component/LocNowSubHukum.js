import { Link, useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";


function LocNowSubHukum () {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); // Mengambil ID dari parameter URL


    useEffect(() => {
        // Misalnya ini API untuk mengambil data produk
        fetch(`http://localhost:5000/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Misalnya Anda hanya mengambil produk pertama dari hasil API
                setProducts(data); // Jika hanya satu produk, ambil langsung data[0]
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
                    <Link to="/berita" className="link_politik_now">
                        <span>Berita</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to={`/berita/${products.id}`} className="link_politik_now">
                        <span>{products.name}</span>
                    </Link>
                </div>                                  
            </div>
        </div>
    );
}

export default LocNowSubHukum;