import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


function LocNowSub () {
    return (
        <div className="wadah_locnow">
            <div className="margin_kanankiri">
                <div className="wadah_all_locnow">
                    <Link to="/" className="link_home_antara">
                        <FaHome className="wadah_icon_home_locnow" />
                        <span>ANTARA</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to="/politik" className="link_politik_now">
                        <span>Politik</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to="/politik/berita" className="link_politik_now">
                        <span>Presiden cermati di era digital semua orang bisa jadi wartawan</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LocNowSub;