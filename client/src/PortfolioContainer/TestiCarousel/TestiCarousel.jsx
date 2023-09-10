import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "./TestiCarousel.css";
import "react-multi-carousel/lib/styles.css";
import data_fr from "../data_fr.json";
import data_en from "../data_en.json";
import data_it from "../data_it.json";
import userPicture from "../../../src/assets/TestiCarousel/user-solid.svg"

const TestiCarousel = () => {
  const [language, setLanguage] = useState("fr");
  const data = language === "en" ? data_en : language === "it" ? data_it : data_fr;

  useEffect(() => {
    const detectedLanguage = navigator.language.split("-")[0];
    if (detectedLanguage === "fr" || detectedLanguage === "en" || detectedLanguage === "it") {
      setLanguage(detectedLanguage);
    } else {
      setLanguage("en");
    }
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1400, min: 700 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        showDots={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["desktop"]}
        draggable={true}

      >
        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              {data.testimonial_description_1}
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="client-info">
            <img src={userPicture} alt="user icon" />
            <h5>{data.testimonial_name_1}</h5>
            <p>{data.testimonial_name_title_1}</p>
          </div>
        </div>
        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left"></i>
                {data.testimonial_description_2}
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="client-info">
            <img src={userPicture} alt="user icon" />
            <h5>{data.testimonial_name_2}</h5>
            <p>{data.testimonial_name_title_2}</p>
          </div>
        </div>

        <div className="testi-item">
          <div className="testi-comment">
            <p>
              <i className="fa fa-quote-left" />
                {data.testimonial_description_3}
              <i className="fa fa-quote-right" />
            </p>
          </div>
          <div className="client-info">
            <img src={userPicture} alt="user icon" />
            <h5>{data.testimonial_name_3}</h5>
            <p>{data.testimonial_name_title_3}</p>
          </div>
        </div>
      </Carousel>
      ;
    </>
  );
};

export default TestiCarousel;
