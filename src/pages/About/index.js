import React from 'react';
import myPic from "../../assets/images/c-bg.png";
import Slide from 'react-reveal/Slide';
import './index.css';

const About = () => {
    return (
        <div className="about-wrapper" id="about">
            <Slide left>
            <div className="image">
                <img src={myPic} alt="my pic" />
            </div>
            </Slide>
            <Slide right>
            <div className="info">
                <span>About Me</span>
                <span>Ut tempor nostrud laboris exercitation irure excepteur cillum ea dolor amet irure cillum laborum ipsum. Mollit ut consectetur ullamco ea qui nostrud fugiat sint pariatur nisi. Cillum culpa dolor dolore nulla excepteur minim adipisicing veniam excepteur aliquip amet. Commodo ea in proident aute exercitation nulla. Esse quis cillum non excepteur pariatur tempor dolor sint fugiat sunt non sunt esse.Eu duis nulla non dolor non est esse reprehenderit nulla minim sit. Voluptate exercitation incididunt proident nostrud ullamco et do laboris velit sit elit excepteur. Labore deserunt non velit et quis velit anim cillum exercitation pariatur id.</span>
            </div>
            </Slide>
        </div>
    )
}

export default About;