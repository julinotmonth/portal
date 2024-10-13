import { Col, Row } from "react-bootstrap";
import img_olahraga from "../img/img_olahraga.webp"
import img_olahraga_2 from "../img/img_olahraga_2.webp"
import img_olahraga_3 from "../img/img_olahraga_3.webp"
import img_olahraga_4 from "../img/img_olahraga_4.webp"
import img_nusantara_1 from "../img/img_nusantara_1.webp"
import img_nusantara_2 from "../img/img_nusantara_2.webp"
import img_nusantara_3 from "../img/img_nusantara_3.webp"
import img_nusantara_4 from "../img/img_nusantara_4.webp"
import img_nusantara_5 from "../img/img_nusantara_5.webp"
import { Link } from "react-router-dom";

function Olahraga () {
    return (
        <div className="wadah_olahraga">
            <div className="margin_kanankiri">
                <div className="wadah_content_olahraga">
                    <Row>
                        <Col xl={8} lg={8} md={6} sm={12}>
                        <div className="wadah_content_editor margin_bottom_editor margin_top_olahraga">
                                <h4 className="judul_content_editor">Olahraga</h4>
                                <div className="wadah_garis_editor margin_bottom_ekonomi">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                                <div className="wadah_content_politik_2">
                                <Row>
                                    <Col xl={6} lg={6} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_right_img_deskrip_politik">
                                            <div className="wadah_img_politik">
                                                <img src={img_olahraga} className="img_politik" />
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
                                                <img src={img_olahraga_2} className="img_politik" />
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
                                                <img src={img_olahraga_3} className="img_politik" />
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
                                                <img src={img_olahraga_4} className="img_politik" />
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
                        <Col xl={4} lg={4} md={6} sm={12}>
                            <div className="wadah_content_nusantara_all">
                            <h4 className="judul_content_editor">Nusantara</h4>
                                <div className="wadah_garis_editor margin_bottom_ekonomi">
                                    <div className="wadah_garis_editor_2"></div>
                                </div>
                                <div className="content_berita_nusantara">
                                     <Row>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="margin_bottom_column_nusantara">
                                                <div className="wadah_img_populer">
                                                    <img src={img_nusantara_1} className="img_popular_nusantara" />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className="margin_bottom_column_nusantara">
                                                <div className="wadah_deskrip_popular">
                                                    <div className="wadah_link_daerah">
                                                        <Link className="link_daerah_indonesia">Jambi</Link>
                                                    </div>
                                                    <Link to="#" className="link_deskrip_popular">
                                                        <span>Unja buat obat pengantar insulin tanpa sakit bagi penderita penyakit diabetes</span>
                                                    </Link>
                                                    <div className="wadah_span_popular_2">
                                                        <span>3 jam lalu</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="margin_bottom_column_nusantara">
                                                <div className="wadah_img_populer">
                                                    <img src={img_nusantara_2} className="img_popular_nusantara" />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className="margin_bottom_column_nusantara">
                                                <div className="wadah_deskrip_popular">
                                                    <div className="wadah_link_daerah">
                                                        <Link className="link_daerah_indonesia">Jawa Barat</Link>
                                                    </div>
                                                    <Link to="#" className="link_deskrip_popular">
                                                        <span>KPU Cianjur: Berkas tiga pasangan calon Pilkada perlu perbaikan</span>
                                                    </Link>
                                                    <div className="wadah_span_popular_2">
                                                        <span>3 jam lalu</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="margin_bottom_column_nusantara">
                                                <div className="wadah_img_populer">
                                                    <img src={img_nusantara_3} className="img_popular_nusantara" />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className="margin_bottom_column_nusantara">
                                                <div className="wadah_deskrip_popular">
                                                    <div className="wadah_link_daerah">
                                                        <Link className="link_daerah_indonesia">Papua Barat</Link>
                                                    </div>
                                                    <Link to="#" className="link_deskrip_popular">
                                                        <span>Hermus: Pembangunan tidak lepas dari peran organisasi perempuan</span>
                                                    </Link>
                                                    <div className="wadah_span_popular_2">
                                                        <span>4 jam lalu</span>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={4} lg={4} md={4} sm={4} xs={4} className="margin_bottom_column_nusantara">
                                                <div className="wadah_img_populer">
                                                    <img src={img_nusantara_4} className="img_popular_nusantara" />
                                                </div>
                                            </Col>
                                            <Col xl={8} lg={8} md={8} sm={8} xs={8} className="margin_bottom_column_nusantara">
                                                <div className="wadah_deskrip_popular">
                                                    <div className="wadah_link_daerah">
                                                        <Link className="link_daerah_indonesia">Riau</Link>
                                                    </div>
                                                    <Link to="#" className="link_deskrip_popular">
                                                        <span>Tokoh Pemuda Dumai pertanyakan demo bansos di Kejati Riau</span>
                                                    </Link>
                                                    <div className="wadah_span_popular_2">
                                                        <span>6 jam lalu</span>
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

export default Olahraga;