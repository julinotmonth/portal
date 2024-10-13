import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img_tekno_1 from "../img/img_tekno_1.webp"
import img_tekno_2 from "../img/img_tekno_2.webp"
import img_tekno_3 from "../img/img_tekno_3.webp"
import img_tekno_4 from "../img/img_tekno_4.webp"

function Tekno () {
    return (
        <div className="wadah_tekno_all margin_bottom_tekno_all">
            <div className="margin_kanankiri">
                <div className="wadah_content_tekno">
                <div className="wadah_content_humaniora margin_top_tekno">
                    <div className="wadah_judul_content_humaniora">
                        <Link className="link_judul_content_humaniora">Tekno</Link>
                    </div>
                        <div className="wadah_garis_editor margin_bottom_ekonomi">
                            <div className="wadah_garis_editor_2"></div>
                        </div>
                        <div className="wadah_content_berita_humaniora">
                            <Row>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora">
                                        <div className="wadah_img_politik">
                                            <img src={img_tekno_1} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">Festival Film Venesia sajikan karya dalam realitas virtual</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>19 jam lalu</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora">
                                        <div className="wadah_img_politik">
                                            <img src={img_tekno_2} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">Apple Watch Series 10 diperkirakan dilengkapi pendeteksi apnea tidur</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>Kemarin 08:09</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora_sm">
                                        <div className="wadah_img_politik">
                                            <img src={img_tekno_3} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">elegram bakal mulai moderasi "chat" usai insiden penangkapan sang CEO</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>Kemarin 17:25</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora_sm">
                                        <div className="wadah_img_politik">
                                            <img src={img_tekno_4} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">Brawl Stars berkolaborasi dengan SpongeBob dan John Cena</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>Kemarin 14:13</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Tekno;