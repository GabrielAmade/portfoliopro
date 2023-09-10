import React, { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import data_en from "../data_en.json";
import data_fr from "../data_fr.json";
import data_it from "../data_it.json";
import CV_GABRIEL_AMADE from "../../assets/AboutMe/CV_GABRIEL_AMADE.pdf";
import "./AboutMe.css";

function AboutMe(props) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const detectedLanguage = navigator.language.split("-")[0];
    if (
      detectedLanguage === "fr" ||
      detectedLanguage === "en" ||
      detectedLanguage === "it"
    ) {
      setLanguage(detectedLanguage);
    } else {
      setLanguage("en");
    }
  }, []);

  const data =
    language === "en" ? data_en : language === "it" ? data_it : data_fr;

  return (
    <>
      <div id="aboutme"></div>
      <Heading title={data.about_me} />
      <div className="about-me-container screen-container">
        <div className="about-me-parent">
          <div className="about-me-columns">
            <div className="about-me-content">
              <div className="about-me-description-title">
                <h2>{data.description_title_1}</h2>
                <h2>{data.description_title_2}</h2>
              </div>
              <div className="about-me-description">
                {data.description.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="about-me-cv">
                <a
                  href={CV_GABRIEL_AMADE}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.download_cv}
                </a>
              </div>
            </div>
            <div className="about-me-general-skills">
              <ul>
                {data.general_skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
