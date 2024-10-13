import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img_grafik_1 from "../img/img_grafik_1.webp"
import img_grafik_2 from "../img/img_grafik_2.webp"
import img_grafik_3 from "../img/img_grafik_3.webp"
import img_grafik_4 from "../img/img_grafik_4.webp"

function InfoGrafik () {
    return (
        <div className="wadah_info_grafik">
            <div className="margin_kanankiri">
                <div className="wadah_content_grafik">
                    <Link className="heading_infografik">Infografik</Link>
                    <div className="wadah_poster_infografik">
                        <Row>
                            <Col xl={3} lg={3} md={3} sm={6}>
                                <div className="wadah_poster_infografik_2 padding_bottom_infografik">
                                    <div className="wadah_image_poster">
                                        <img src={img_grafik_1} className="wadah_image_poster" />
                                    </div>       
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={3} sm={6}>
                                <div className="wadah_poster_infografik_2 padding_bottom_infografik padding_top_infografik_sm">
                                    <div className="wadah_image_poster">
                                        <img src={img_grafik_2} className="wadah_image_poster" />
                                    </div>       
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={3} sm={6}>
                                <div className="wadah_poster_infografik_2 padding_top_infografik padding_bottom_infografik_sm">
                                    <div className="wadah_image_poster">
                                        <img src={img_grafik_3} className="wadah_image_poster" />
                                    </div>       
                                </div>
                            </Col>
                            <Col xl={3} lg={3} md={3} sm={6}>
                                <div className="wadah_poster_infografik_2 padding_top_infografik">
                                    <div className="wadah_image_poster">
                                        <img src={img_grafik_4} className="wadah_image_poster" />
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

export default InfoGrafik;