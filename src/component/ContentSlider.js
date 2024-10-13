import { Col, Row } from "react-bootstrap";
import NextArrow from "./NextArrow";
import PreviewArrow from "./PreviewArrow";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pausfransis from "../img/pausfransis.webp"
import risiko from "../img/risiko.webp"
import paus_ajak from "../img/paus_ajak.webp"
import jokowi_jadwalkan from "../img/jokowi_jadwalkan.webp"
import indonesia_arab from "../img/indonesia_arab.webp"
import transjakarta from "../img/transjakarta.webp"
import indonesia_palestine from "../img/indonesia_palestine.webp"
import cacar from "../img/cacar.webp"
import crousel_sekda_1 from "../img/crousel_sekda_1.jpeg"
import crousel_sekda_2 from "../img/crousel_sekda_2.jpeg"
import crousel_sekda_3 from "../img/crousel_sekda_3.jpeg"
import crousel_sekda_4 from "../img/crousel_sekda_4.jpeg"
import crousel_sekda_5 from "../img/crousel_sekda_5.jpeg"
import crousel_sekda_6 from "../img/crousel_sekda_6.jpeg"
import crousel_sekda_7 from "../img/crousel_sekda_7.jpeg"
import { useEffect, useRef, useState } from "react";

function ContentSlider () {
    const [dataPengumuman, setDataPengumuman] = useState([]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PreviewArrow />,
        appendDots: dots => (
            <div style={{display: 'none'}}> 
                
            </div>
        )
    };
    
    useEffect(() => {
        fetch('http://localhost:5000/pengumumanByTime')
          .then(response => response.json())
          .then(result => {
            // Urutkan data berdasarkan waktu
            const sortedData = result.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
            setDataPengumuman(sortedData);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);

  // Fungsi untuk memotong teks jika melebihi 10 karakter
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
        }
        return text;
    };
    return (
        <div className="wadah_content_slider">
            <div className="margin_kanankiri">
                <div className="content_slider">
                <Row>
                    <Col xl={12} lg={12} md={12}>
                        <Slider {...settings}>
                            <div className="wadah_content_crousel">
                                <Row>
                                {dataPengumuman
                                .filter((item) => item.id === 3) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6} key={item.id}>
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}
                                
                                {dataPengumuman
                                .filter((item) => item.id === 4) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6}  key={item.id} className="display_column_parag_2">
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}

{dataPengumuman
                                .filter((item) => item.id === 5) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6} key={item.id} className="display_column_parag_3">
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}

{dataPengumuman
                                .filter((item) => item.id === 6) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6} key={item.id} className="display_column_parag_4">
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}

                                
                                </Row>
                            </div>

                            <div className="wadah_content_crousel">
                                <Row>
                                {dataPengumuman
                                .filter((item) => item.id === 7) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6} key={item.id}>
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}
                                
                                {dataPengumuman
                                .filter((item) => item.id === 8) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6} key={item.id} className="display_column_parag_2">
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}

{dataPengumuman
                                .filter((item) => item.id === 9) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6} key={item.id} className="display_column_parag_3">
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}

{dataPengumuman
                                .filter((item) => item.id === 10) // Filter berdasarkan ID
                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Urutkan berdasarkan createdAt
                                .slice(0, 4) // Ambil hanya 6 konten terbaru
                                .map((item) => (
                                    <Col xl={3} lg={3} md={6} key={item.id} className="display_column_parag_4">
                                        <div className="wadah_content_crousel_2">
                                            <Link to={`/pengumuman/${item.id}`}>
                                                <img src={item.url_pengumuman} className="img_content_crousels" />
                                            </Link>
                                            <Link to={`/pengumuman/${item.id}`} className="link_deskripsi_content">
                                                <span>{truncateText(item.name_pengumuman, 50)}</span>
                                            </Link>
                                            <div className="wadah_kategori">
                                                <span>Pengumuman</span>
                                            </div>
                                        </div>
                                        </Col>
                                ))}

                                
                                </Row>
                            </div>
                        </Slider>
                    </Col>
                </Row>
                </div>
            </div>
        </div>
    );
}

export default ContentSlider;