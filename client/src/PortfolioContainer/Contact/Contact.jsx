import React, { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Heading from "../Heading/Heading";
import data_fr from "../data_fr.json";
import data_en from "../data_en.json";
import data_it from "../data_it.json";

function Contact() {
  const [language, setLanguage] = useState("en");
  const [message, setMessage] = useState("");

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Vérifiez si les champs obligatoires sont remplis
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const userMessage = form.current.user_message.value;

    if (!userName || !userEmail || !userMessage) {
      setMessage("Merci de remplir tous les champs du formulaire.");
      return;
    }

    emailjs
      .sendForm(
        "service_6kzwtzq",
        "template_ao0lnyi",
        form.current,
        "F2LRmPkFp4dOKM1Bf"
      )
      .then((result) => {
        setMessage(
          "Merci de m'avoir contacté. Je reviens vers vous dès que possible."
        );
        console.log(result.text);
      })
      .catch((error) => {
        setMessage("Une erreur s'est produite. Veuillez réessayer plus tard.");
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div className="main-container" id="contact">
      <Heading title={"Contact"} />
      <div className="central-form">
        <div className="col-1">
          <div className="contact-infos">
            <h2>
              <a href="https://linkedin.com/in/gabriel-amade">Linkedin</a>
            </h2>
            <h2>
              <a href="https://github.com/GabrielAmade">GitHub</a>
            </h2>
            <h2>
              <a href="mailto:gabrielamade@icloud.com">
                gabrielamade@icloud.com
              </a>
            </h2>
          </div>
        </div>
        <div className="col-2">
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">{data.contact_name}</label>
              <input type="text" name="user_name" />
              <label htmlFor="email">{data.contact_email}</label>
              <input type="email" name="user_email" />
              <label htmlFor="message">{data.contact_message}</label>
              <textarea type="text" name="user_message" cols="30" rows="2" />
              <div className="send-btn">
                <button type="submit">{data.contact_send}</button>
              </div>
              <div className="validation-message">{message}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
