import React, { useEffect, useState } from "react";
import "./Navbar.css";
import data_en from "../data_en.json";
import data_fr from "../data_fr.json";
import data_it from "../data_it.json";

const Navbar = () => {
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
      <nav className="navbar">
        <div className="navbar-left">
          <span>Gabriel Amadé</span>
        </div>
        <div className="navbar-right">
          <a href="#aboutme">{data.navbar_about_me}</a>
          <a href="#experiences">{data.navbar_experiences}</a>
          <a href="#contact">{data.navbar_contact}</a>
        </div>
      </nav>
      <div className="navbar-underline"></div>
    </>
  );
};

export default Navbar;
