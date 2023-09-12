import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Profile.css";
import profilephoto from "../../assets/Home/profilephoto.jpg";
import data_fr from "../data_fr.json";
import data_en from "../data_en.json";
import data_it from "../data_it.json";

const Profile = () => {
  const [language, setLanguage] = useState("fr");
  const data =
    language === "en" ? data_en : language === "it" ? data_it : data_fr;

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

  return (
    <div className="profile-container">
      <div className="profile-columns">
        <div className="profile-details">
          <div className="profile-role">
            <h1>{data.greeting}</h1>
            <span>
              <p className="profile-role-tagline">{data.tagline}</p>
            </span>
          </div>

          <div className="colz">
            <a href="https://github.com/GabrielAmade">
              <FontAwesomeIcon icon={faGithub} className="fa-3x icon" />
            </a>
            <a href="https://linkedin.com/in/gabriel-amade">
              <FontAwesomeIcon icon={faLinkedin} className="fa-3x icon" />
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="background-color"></div>
          <img src={profilephoto} alt="photo_profil" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
