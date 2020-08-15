import React from 'react'
import Roll from 'react-reveal/Roll';
import './FlipCard.css';

const FlipCard = ({ lang, devIcon, stars, half }) => {
    let levels = [];
    levels = (new Array(stars)).fill("star");
    if (half && levels.length <= 4) levels.push("star-half-o");
    while (levels.length <= 4) {
        levels.push("star-o");
    }
    console.log("levels", levels);
    return (
        <Roll>
            <div className="flip-card">
                <div className="flip-card-front">
                    <i className={`${devIcon} colored big icon-gold`}></i>
                </div>
                <div className="flip-card-back">
                    <div className="name">{lang}</div>
                    <div className="levels">
                    {
                        levels.map((lev, i) => <i style={{ margin: "0px 1px" }} key={`${lev}_${i}`} class={`fa fa-${lev}`} aria-hidden="true"></i>)
                    }
                    </div>
                </div>
            </div>
        </Roll>
    );
}

export default FlipCard;
