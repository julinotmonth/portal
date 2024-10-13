import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


function LocNowSearch () {
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
      };
    
    const query = useQuery();
    const searchTerm = query.get('query') || ''; 
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
                    <Link to="/search" className="link_politik_now">
                        <span>Search</span>
                    </Link>
                    <div className="wadah_icon_arrow_right">
                        <IoIosArrowForward className="icon_arrow_right" />
                    </div>
                    <Link to="#" className="link_politik_now">
                        <span>{searchTerm}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LocNowSearch;