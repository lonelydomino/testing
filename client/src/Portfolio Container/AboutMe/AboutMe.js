import React from 'react'
import { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

const AboutMe = (props) => {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id) return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {description: "Full stack web developer with a background in biology. Enthusiastic and willing to be an asset for an organization.",
highlights: {
    bullets: [
        "Full Stack Web Development",
    "Javascript",
    "React",
    "Redux for State Management",
    "Rest API"
    ],
    heading: "Here are a few highlights: "
}}
const renderHighlight = () => {
    return(
        SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (<div className="highlight" key={i}>
            <div className="highlight-blob"></div>
            <span>{value}</span>
        </div>))
    )
}
     return (
     <div className="about-me-container screen-container fade-in" id={props.id || ""}>
         <div className="about-me-parent">
             <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"}/>
             <div className="about-me-card">
                 <div className="about-me-profile"></div>
                 <div className="about-me-details">
                     <span className="about-me-description">{SCREEN_CONSTANTS.description}</span>
                 <div className="about-me-highlights">
                     <div className="highlight-heading">
                         <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                     </div>
                     {renderHighlight()}
                     </div>
                 <div className="about-me-options">
                        <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
                        <a href="Resume 2021 Michael Martinez.pdf" download="Resume 2021 Michael Martinez.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                 </div>
                 </div>
             </div>
         </div>
        
     </div>
     )
}
export default AboutMe