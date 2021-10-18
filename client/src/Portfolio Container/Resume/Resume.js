import React from "react"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"
import { useState } from "react"
import "./Resume.css"

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
            <span>{props.link ? (<a href={props.link}>{props.heading}</a> ): props.heading}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + " - " + props.toDate}
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
    )
  }

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ]

  const programmingSkillDetails = [
    { skill: "Javascript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "Ruby", ratingPercentage: 95 },
  ]
  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A portfolio website to showcase my resume, skills and projects.",
      subHeading: "Technologies used: React JS, Bootstrap, NodeJS",
    },
    {
      title: "WebMart",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Mock ecommerce website for showcasing and sell products online.",
      subHeading: "Technologies used: React JS, Redux",
      link: "https://portfolio-web-mart.netlify.app"
    },
    {
      title: "MamaBear",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Ecommerce website designed around Shopify for a nonprofit organization.",
      subHeading: "Technologies used: React JS, Shopify, GraphQL",
    },
  ]

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Redlands, Redlands, CA"}
        subHeading={"Bachelor of Arts, Biology"}
        fromDate={"2012"}
        toDate={"2014"}
      />

      <ResumeHeading
        heading={"Flatiron School, Brooklyn, NY"}
        subHeading={"Full Stack Web Development, Ruby on Rails and JavaScript"}
        fromDate={"2020"}
        toDate={"2021"}
      />

    </div>,

    // work experience

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Lowe's"}
          subHeading={"Pro Sales Specialist"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          {/* <span className="resume-description-text">
            Currently working as a Pro Sales Specialist
          </span> */}
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            ● Assisted customers with Lowe’s account and credit card sign-ups.
          </span>
          <br />
          <span className="resume-description-text">
            ● Increased department sales profits by 13% in my first three months
          </span>
          <br />
          <span className="resume-description-text">
            ● Worked with 3rd party vendors to place and plan product orders and
            deliveries.
          </span>
          <br />
        </div>
        <ResumeHeading
          heading={"Home Depot"}
          subHeading={"Pro Account Sales Associate"}
          fromDate={"2016"}
          toDate={"2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            ● Assisted contractors with sales over the phone and in person.
          </span>
          <br />
          <span className="resume-description-text">
            ● Coordinated with other departments to fulfil customer orders.
          </span>
          <br />
          <span className="resume-description-text">
            ● Reduced Pro Department product losses by 8%
          </span>
          <br />
        </div>
      </div>
    </div>,

//Programming skills

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
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


//Projects

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          link={projectsDetails.link}
        />
      ))}
    </div>,

    //Interests

    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Gaming" description="I love gaming and will constantly be testing my reflexes playing a multitude of genres." />
      <ResumeHeading heading="Programming" description="I love designing new apps, especially ones that can help others." />
      <ResumeHeading heading="Music" description="I enjoy nearly all kinds of music, with rock, jazz and techno being my favorites." />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    }
    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

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
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="oops, no logo"
        />
        <span className="bullet-c">{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}
export default Resume
