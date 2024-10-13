import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import img_politik from "../img/img_politik_1.webp"
import img_politik_2 from "../img/img_politik_2.webp"
import img_politik_3 from "../img/img_politik_3.webp"
import img_politik_4 from "../img/img_politik_4.webp"
import img_hukum_1 from "../img/img_hukum_1.webp"
import img_hukum_2 from "../img/img_hukum_2.webp"
import img_hukum_3 from "../img/img_hukum_3.webp"
import img_hukum_4 from "../img/img_hukum_4.webp"
import axios from "axios"
import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { id } from 'date-fns/locale';

function PengumumanDash () {

    // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    const [pengumumans, setPengumumans] = useState([]);

    useEffect(() => {
        getPengumumans();
    }, []);

    const getPengumumans = async () => {
        const response = await axios.get("http://localhost:5000/pengumuman");
        setPengumumans(response.data)
    };

    const deletePengumuman = async (pengumumanid) => {
        try {
            await axios.delete(`http://localhost:5000/pengumuman/${pengumumanid}`);
            getPengumumans();
        } 
        
        catch (error) {
            console.log(error)
        }
    };
    return (
        <div className="wadah_component_berita margin_bottom_wadah_component_berita margin_top_component_berita">
            <div className="margin_kanankiri">
                <div className="wadah_content_component_berita">
                    <div className="wadah_content_component_berita_2">
                        <div className="wadah_content_editor margin_bottom_editor wadah_content_dashboarddd">
                        <Row>
                                <Col xl={11} lg={11} md={11} sm={9} xs={9}>
                                    <h4 className="judul_content_editor">Pengumuman</h4>
                                </Col>
                                <Col xl={1} lg={1} md={1} sm={3} xs={3}>
                                    <Link to={`add-pengumuman`}>
                                        <Button className="width_button_send" variant="outline-success">Add</Button>
                                    </Link>
                                </Col>
                            </Row>
                            <div className="wadah_garis_editor">
                                <div className="wadah_garis_editor_2"></div>
                            </div>
                        </div>
                                <Row>
                                {pengumumans.map((pengumuman) => (
                                    <Col xl={3} lg={3} md={6} sm={12}>
                                        <div className="wadah_img_deskrip_politik margin_bottom_deskrip_politik_1 margin_bottom_row_berita_data">
                                            <div className="wadah_img_politik">
                                                <img src={pengumuman.url_pengumuman} className="img_politik" />
                                            </div>
                                            <div className="wadah_deskrip_politik">
                                                <Link to={`/pengumuman/${pengumuman.id}`} className="link_deskrip_politik">{truncateText(pengumuman.name_pengumuman, 60)}</Link>
                                            </div>
                                            <div className="wadah_span_waktu">
                                                <span>{formatDistanceToNow(new Date(pengumuman.createdAt), { addSuffix: true, locale: id })}</span>
                                            </div>
                                            <div className="wadah_content_dashboard_edit_delete">
                                                <Row>
                                                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                                        <div className="margin_right_wadah_button">
                                                            <Link to={`edit-pengumuman/${pengumuman.id}`}> 
                                                                <Button className="width_button_edit" variant="outline-primary">Edit</Button>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                    <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                                        <div className="margin_left_wadah_button">
                                                            <Link onClick={() => deletePengumuman(pengumuman.id)}>
                                                                <Button className="width_button_edit" variant="outline-danger">Delete</Button>
                                                            </Link>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                                </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PengumumanDash;