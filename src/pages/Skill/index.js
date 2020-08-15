import React from 'react'
import FlipCard from './FlipCard';
import './index.css';

export const SkillBar = () => {
    return (
        <div className="skill-bar">
            <div className="bg"></div>
            <div className="ff"></div>
        </div>
    );
}
const Skill = () => {

    return (
        <div className="skill-wrapper" id="skills">
            <div className="skill-title">Skills</div>
            <div className="fe-body">
                <FlipCard devIcon={"devicon-html5-plain-wordmark"} stars={5} half={1} lang={"Html5"}/>
                <FlipCard devIcon={"devicon-css3-plain-wordmark"} stars={0} half={1} lang={"Css3"}/>
                <FlipCard devIcon={"devicon-javascript-plain"} stars={5} lang={"JavaScript"}/>
                <FlipCard devIcon={"devicon-typescript-plain"} stars={4} half={1} lang={"TypeScript"}/>
                <FlipCard devIcon={"devicon-angularjs-plain"} stars={4} half={1} lang={"Angular 2+"}/>
                <FlipCard devIcon={"devicon-react-original"} stars={4} half={1} lang={"React.js"}/>
            </div>
            <div class="separator"></div>
            <div className="be-body">
                <FlipCard devIcon={"devicon-nodejs-plain"} stars={4} half={1}/>
                <FlipCard devIcon={"devicon-go-plain"} stars={4} half={1}/>
            </div>
            <div class="separator"></div>
            <div className="db-body">
                <FlipCard devIcon={"devicon-postgresql-plain"} stars={4} half={1}/>
                <FlipCard devIcon={"devicon-mongodb-plain"} stars={4} half={1}/>
                <FlipCard devIcon={"devicon-docker-plain"} stars={4} half={1}/>
                <FlipCard devIcon={"devicon-git-plain"} stars={4} half={1}/>
                <FlipCard devIcon={"devicon-github-plain"} stars={4} half={1}/>
                <FlipCard devIcon={"devicon-bitbucket-plain"} stars={4} half={1}/>
                <FlipCard devIcon={"devicon-confluence-plain"} stars={4} half={1}/>
            </div>
        </div>
    )
}

export default Skill;