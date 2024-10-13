import { Carousel } from "react-bootstrap";
import carousel_1 from "../img/carousel_1.webp"
import carousel_2 from "../img/carousel_2.webp"
import carousel_3 from "../img/carousel_3.webp"
import carousel_4 from "../img/carousel_4.webp"
import carousel_5 from "../img/carousel_5.webp"
import carousel_6 from "../img/carousel_6.webp"
import crousel_sekda_1 from "../img/crousel_sekda_1.jpeg"
import crousel_sekda_2 from "../img/crousel_sekda_2.jpeg"
import crousel_sekda_3 from "../img/crousel_sekda_3.jpeg"
import crousel_sekda_4 from "../img/crousel_sekda_4.jpeg"
import crousel_sekda_5 from "../img/crousel_sekda_5.jpeg"
import crousel_sekda_6 from "../img/crousel_sekda_6.jpeg"
import crousel_sekda_7 from "../img/crousel_sekda_7.jpeg"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Carousels () {
    const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it's visible
        }
      },
      {
        threshold: 0.1, // Carousel will trigger when 10% is visible
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);
    return (
        <div className={`wadah_carousels ${isVisible ? "slide-in" : ""}`}
        ref={carouselRef}>
            <div className="margin_kanankiri">
                <Carousel>
                    <Carousel.Item>
                        <img src={crousel_sekda_1} className="carousel_1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={crousel_sekda_2} className="carousel_1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={crousel_sekda_3} className="carousel_1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={crousel_sekda_4} className="carousel_1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={crousel_sekda_5} className="carousel_1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={crousel_sekda_6} className="carousel_1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={crousel_sekda_7} className="carousel_1" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Carousels;