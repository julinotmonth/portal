import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img_footer_antara from "../img/img_footer_antara.svg"
import img_setda from "../img/img_setda.png"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";


function Footer () {
    return (
        <div className="wadah_footer">
            <div className="margin_kanankiri">
                <div className="wadah_content_footer">
                    <div className="wadah_img_footer_and_icon">
                        <Row>
                            <Col xl={6} lg={6} md={12} sm={12}>
                                <div className="wadah_img_footer_and_icon_2">
                                    <Link to="/">
                                        <img src={img_setda} className="img_footer" />
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={6} lg={6} md={12} sm={12}>
                            <div className="wadah_all_icon_footer">
                                <div className="wadah_img_footer_and_icon_3">
                                    <Link to="https://www.facebook.com/humasprovjatim" className="link_icon_footer">
                                        <FaFacebook className="icon_footer" />
                                    </Link>
                                </div>
                                <div className="wadah_img_footer_and_icon_3">
                                    <Link className="link_icon_footer_whatsapp">
                                        <FaWhatsapp className="icon_footer" />
                                    </Link>
                                </div>
                                <div className="wadah_img_footer_and_icon_3">
                                    <Link className="link_icon_footer_twiter">
                                        <IoLogoTwitter  className="icon_footer" />
                                    </Link>
                                </div>
                                <div className="wadah_img_footer_and_icon_3">
                                    <Link to="https://www.instagram.com/humasprovjatim" className="link_icon_footer_instagram">
                                        <FiInstagram  className="icon_footer" />
                                    </Link>
                                </div>
                                <div className="wadah_img_footer_and_icon_3">
                                    <Link to="https://www.youtube.com/@humasjatim" className="link_icon_footer_yotube">
                                        <AiFillYoutube   className="icon_footer" />
                                    </Link>
                                </div>
                            </div>
                            </Col>
                        </Row>
                        <div className="wadah_content_all_link_alll">
                            <Row>
                                <Col xl={3} lg={3} md={12}>
                                    <div className="wadah_content_all_link border_bottom_link_footer border_top_link_footer">
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/" className="content_link_2">Beranda</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/laporan-kinerja" className="content_link_2">Laporan Kinerja</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="https://biroadpim.jatimprov.go.id/ppid/" className="content_link_2">PPID</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/hubungi-kami" className="content_link_2">Hubungi Kami</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={12}>
                                    <div className="wadah_content_all_link border_bottom_link_footer">
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/" className="content_link_2">Profil</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/visi-misi" className="content_link_2">Visi & Misi</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/tugas&fungsi" className="content_link_2">Tugas & Fungsi</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/struktur-organisasi" className="content_link_2">Struktur Organisasi</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to='/profil-kepala-biro' className="content_link_2">Profil Kepala Biro</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={12}>
                                    <div className="wadah_content_all_link border_bottom_link_footer">
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/" className="content_link_2">Informasi</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/whistle-blowing" className="content_link_2">Whistle Blowing</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/artikel" className="content_link_2">Artikel</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/berita" className="content_link_2">Berita</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="pengumuman" className="content_link_2">Pengumuman</Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={12}>
                                    <div className="wadah_content_all_link border_bottom_link_footer">
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/" className="content_link_2">Publikasi</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/download" className="content_link_2">Download</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="/video" className="content_link_2">Video</Link>
                                        </div>
                                        <div className="wadah_content_link_2 margin_bottom_content_link">
                                            <Link to="https://biroadpim.jatimprov.go.id/" className="content_link_2">https://biroadpim.jatimprov.go.id/</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="wadah_copyright_antara">
                                <span className="span_copyright_antara">Copyright © RO ADPIM SETDA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;