import React, { useState, useEffect } from "react";
import Heading from "../Heading/Heading";
import "./Resume.css";
import data_fr from "../data_fr.json";
import data_en from "../data_en.json";
import data_it from "../data_it.json";

function Resume() {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  const [language, setLanguage] = useState("en"); // Default to English

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

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: data.bullet_name_1, logoSrc: "education.svg" },
    { label: data.bullet_name_2, logoSrc: "work-history.svg" },
    { label: data.bullet_name_3, logoSrc: "programming-skills.svg" },
    { label: data.bullet_name_4, logoSrc: "projects.svg" },
    { label: data.bullet_name_5, logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 55 },
    { skill: "Express JS", ratingPercentage: 55 },
    { skill: "Mongo DB", ratingPercentage: 55 },
    { skill: "PHP", ratingPercentage: 40 },
  ];

  const projectsDetails = [
    {
      title: (
        <a
          href="https://github.com/GabrielAmade/bookie"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.project_name_1}
        </a>
      ),
      duration: { fromDate: "2020", toDate: "2021" },
      description: (
        <div className="project-container">
          <div className="project-description project-description-1">
            {data.project_details_1}
          </div>
          <div className="project-image project-image-1"></div>
        </div>
      ),
    },
    {
      title: (
        <a
          href="https://github.com/GabrielAmade/Portfolio-architecte-sophie-bluel-master"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.project_name_2}
        </a>
      ),
      duration: { fromDate: "2020", toDate: "2021" },

      description: (
        <div className="project-container">
          <div className="project-description project-description-2">
            {data.project_details_2}
          </div>
          <div className="project-image project-image-2"></div>
        </div>
      ),
    },

    {
      title: (
        <a
          href="https://github.com/GabrielAmade/kasa"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.project_name_3}
        </a>
      ),
      duration: { fromDate: "2020", toDate: "2021" },
      description: (
        <div className="project-container">
          <div className="project-description project-description-3">
            {data.project_details_3}
          </div>
          <div className="project-image project-image-3"></div>
        </div>
      ),
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={data.studies_name_1}
        subHeading={data.studies_details_1}
        fromDate={data.studies_year_from_1}
        toDate={data.studies_year_to_1}
      />

      <ResumeHeading
        heading={data.studies_name_2}
        subHeading={data.studies_details_2}
        fromDate={data.studies_year_from_2}
        toDate={data.studies_year_to_2}
      />
      <ResumeHeading
        heading={data.studies_name_3}
        subHeading={data.studies_details_3}
        fromDate={data.studies_year_from_3}
        toDate={data.studies_year_to_3}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={data.work_experience_heading}
          subHeading={data.work_experience_subheading}
          fromDate={"2022"}
          toDate={"Présent"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            {data.work_experience_list_1}
          </span>
          <br />
          <span className="resume-description-text">
            {data.work_experience_list_2}
          </span>
          <br />
          <span className="resume-description-text">
            {data.work_experience_list_3}
          </span>
          <br />
          <span className="resume-description-text">
            {data.work_experience_list_4}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading={data.hobby_title_1}
        description={data.hobby_description_1}
      />
      <ResumeHeading
        heading={data.hobby_title_2}
        description={data.hobby_description_2}
      />
      <ResumeHeading
        heading={data.hobby_title_3}
        description={data.hobby_description_3}
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/ResumeIcons/${bullet.logoSrc}`)}
          alt="logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <>
      <div id="experiences"></div>
      <Heading title={data.experiences} />
      <div className="resume-container screen-container">
        <div className="resume-content">
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons"></div>
                <div className="bullets">{getBullets()}</div>
              </div>
            </div>
            <div className="resume-bullet-details">{getResumeScreen()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
