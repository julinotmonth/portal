import { Col, Row } from "react-bootstrap";
import img_kemendibud from "../img/img_kemendibud.webp"
import img_humaniora_2 from "../img/img_humaniora_2.webp"
import img_humaniora_3 from "../img/img_humanioara_3.webp"
import img_humaniora_4 from "../img/img_humanioara_4.webp"
import { Link } from "react-router-dom";

function Humaniora () {
    return (
        <div className="wadah_humaniora margin_top_humaniora">
            <div className="margin_kanankiri">
                <div className="wadah_content_humaniora">
                    <div className="wadah_judul_content_humaniora">
                        <Link className="link_judul_content_humaniora">Humaniora</Link>
                    </div>
                        <div className="wadah_garis_editor margin_bottom_ekonomi">
                            <div className="wadah_garis_editor_2"></div>
                        </div>
                        <div className="wadah_content_berita_humaniora">
                            <Row>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora">
                                        <div className="wadah_img_politik">
                                            <img src={img_kemendibud} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">Kemendibudristek dukung ekonomi hijau lewat dana abadi pendidikan</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>1 jam lalu</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora">
                                        <div className="wadah_img_politik">
                                            <img src={img_humaniora_2} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">Kunjungan Sri Paus bukti keragaman beragama di RI terjalin erat</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>11 jam lalu</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora_sm">
                                        <div className="wadah_img_politik">
                                            <img src={img_humaniora_3} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">Paus Fransiskus tinggalkan Tanah Air melalui Bandara Soekarno hatta</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>2 jam lalu</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12}>
                                    <div className="wadah_img_deskrip_politik margin_bottom_content_humaniora_sm">
                                        <div className="wadah_img_politik">
                                            <img src={img_humaniora_4} className="img_politik" />
                                        </div>
                                        <div className="wadah_deskrip_politik">
                                            <Link className="link_deskrip_politik">Presiden Jokowi resmikan RS Kemenkes Surabaya senilai Rp2 triliun</Link>
                                        </div>
                                        <div className="wadah_span_waktu">
                                            <span>8 jam lalu</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Humaniora;