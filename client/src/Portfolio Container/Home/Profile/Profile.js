import React from 'react';
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService'
import Animations from '../../../utilities/Animations';
import "./Profile.css"
const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className="colz-icon">
                            <a href='https://github.com/lonelydomino'>
                                <i className='fa fa-github'></i>
                            </a>
                            <a href='https://www.linkedin.com/in/michael-martinez-bb49a8a0/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            <a href='https://www.twitch.tv/drmilomd'>
                                <i className='fa fa-twitch'></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-test">
                            {""}
                            Hello, I'm <span className="highlighted-text">Michael</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Ethusiatic Dev  🖥 ", 1000,
                                    "Full Stack Developer 💻", 1000,
                                    "Flatiron School Graduate 🎓", 1000
                                ]}/>

                            </h1>
                            <span className="profile-role-tagline">
                            Passionate about learning new things and staying current with technology
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire Me
                        </button>
                        <a href="Resume 2021 Michael Martinez.pdf" download="Resume 2021 Michael Martinez.pdf">
                            <button className="btn highlighted-btn">
                                Get Resume
                            </button>
                        </a>
                    </div>               
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
