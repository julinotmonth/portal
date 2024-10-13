import { Link } from "react-router-dom";
import mprri from "../img/mprri.gif"

function BannerMpr () {
    return (
        <div className="wadah_banner_mpr">
            <div className="margin_kanankiri">
                <div className="wadah_content_banner">
                    <div className="wadah_content_banner_2">
                        <Link to="#">
                            <img src={mprri} className="content_banner_mpr" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerMpr;