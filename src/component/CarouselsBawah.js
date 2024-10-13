import { Carousel } from "react-bootstrap";
import crousel_bawah_1 from "../img/crousel_bawah_1.webp"
import crousel_bawah_2 from "../img/crousel_bawah_2.webp"
import crousel_bawah_3 from "../img/crousel_bawah_3.webp"
import img_terkini_1 from "../img/img_terkini_1.jpeg"
import img_terkini_2 from "../img/img_terkini_2.jpeg"
import img_terkini_3 from "../img/img_terkini_3.jpeg"
import { Link } from "react-router-dom";

function CarouselsBawah () {
    return (
        <div className="wadah_carousels wadah_background_carousels">
            <div className="margin_kanankiri">
                <div className="wadah_background_carousels_2">
                    <div className="wadah_judul_foto">
                        <Link className="link_judul_foto">Foto</Link>
                    </div>
                    <Carousel className="wadah_crousel_content">
                        <Carousel.Item>
                            <img src={crousel_bawah_1} className="carousel_1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={crousel_bawah_2} className="carousel_1" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={crousel_bawah_3} className="carousel_1" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default CarouselsBawah;