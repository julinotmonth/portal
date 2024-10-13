import struktur_organisasi from "../img/struktur_organisasi.png"

function ImgStruktur () {
    return (
        <div className="wadah_struktur_organisasi margin_bottom_img_struktur">
            <div className="margin_kanankiri">
                <div className="content_struktur_organisasi">
                    <div className="wadah_img_struktur_organisasi">
                        <img src={struktur_organisasi} className="img_struktur_organisasi" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgStruktur;