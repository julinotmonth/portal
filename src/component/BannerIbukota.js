import poster_ibukota from "../img/poster_ibukota.gif"

function BannerIbukota () {
    return (
        <div className="wadah_ibukota">
            <div className="margin_kanankiri">
                <div className="wadah_content_poster_ibukota">
                    <div className="wadah_img_ibukota">
                        <img src={poster_ibukota} className="img_ibukota" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerIbukota;