import React from 'react'
import landingImage from '../../assets/images/code2.png';
import Slide from 'react-reveal/Slide';
import Resume from "../../assets/ManasPatel_acg.pdf";
import './index.css';

const Landing = () => {
    return (
        <div className="intro-wrapper" id="home">
            <Slide left>
                <div className="intro">
                    <div className="line-1">About me as a professional</div>
                    <div className="line-2"><span>Front-end</span> Engineer</div>
                    <div className="line-3">and <span>Enthusiast Learner</span></div>
                    <section className="cta">
                        <div className="primary"><span>Contact</span></div>
                        <div className="secondary" onClick={() => {
                            let win = window.open(Resume, '_blank');
                            win.focus();
                        }}><span>Download</span></div>
                    </section>
                </div>
            </Slide>
            <Slide right>
                <div className="hero-image">
                    <img src={landingImage} alt="hero" height="400px" />
                </div>
            </Slide>
        </div>
    )
}

export default Landing
