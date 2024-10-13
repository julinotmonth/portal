import { Col, Row } from "react-bootstrap";
import img_metro_1 from "../img/img_metro_1.webp"
import img_metro_2 from "../img/img_metro_2.webp"
import img_metro_3 from "../img/img_metro_3.webp"
import img_metro_4 from "../img/img_metro_4.webp"
import { Link } from "react-router-dom";

function Metro () {
    return (
        <div className="wadah_metro">
            <div className="margin_kanankiri">
                <div className="wadah_content_metro">
                    <Row>
                        <Col xl={8} lg={8} md={6} sm={12}>
                        <div className="wadah_content_editor margin_bottom_editor margin_top_content_ekonomi">
                                <h4 className="judul_content_editor">Metro</h4>
                                <div className="wadah_garis_editor margin_bottom_ekonomi">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                                <div className="wadah_content_politik_2">
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_img_deskrip_politik">
                                            <div className="wadah_img_politik">
                                                <img src={img_metro_1} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link className="link_deskrip_politik">ISF targetkan kesepakatan energi berkelanjutan di akhir forum</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>1 jam lalu</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_img_deskrip_politik margin_top_wadah_img_deskrip_politik">
                                            <div className="wadah_img_politik">
                                                <img src={img_metro_2} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link className="link_deskrip_politik">Kemenkop UKM siapkan 5 pondasi untuk UMKM bertransformasi</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>8 jam lalu</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_img_deskrip_politik margin_top_img_deskrip_politik">
                                            <div className="wadah_img_politik">
                                                <img src={img_metro_3} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link className="link_deskrip_politik">Pemerintah menjanjikan refund dana milikpembeli e-Meterai Peruri</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>11 jam lalu</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_left_img_deskrip_politik margin_top_img_deskrip_politik">
                                            <div className="wadah_img_politik">
                                                <img src={img_metro_4} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link className="link_deskrip_politik">Ekonom Faisal Basri meninggal dunia</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>Kemarin 07:32</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Metro;