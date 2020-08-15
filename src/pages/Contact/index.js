import React from 'react'
import './index.css';

const Contact = () => {
    const handleFormSubmit = (e) => {
        console.log("form evt", e);
        e.preventDefault();
    }
    return (
        <div className="contact" id="contact">
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <input id="name" type="text" placeholder="your goodname" />
                    <input id="email" type="email" placeholder="your email" />
                    <textarea id="message" placeholder="what do you wana say!!" />
                    <button className="send"><i className="fa fa-paper-plane fa-2x" aria-hidden="true"></i></button>
                </form>
            </section>
            <section className="social-media">
                <div className="fullname">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>Manas Patel</span>
                </div>
                <div className="address">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Banglore, India</span>
                </div>
                <div className="phone">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>(+91) 94377-66389</span>
                </div>
                <div className="emailadd">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <span>manas22patel@gmail.com</span>
                </div>
                <div className="social-icons">
                    <span><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></span>
                    <span><i className="fa fa-github fa-2x" aria-hidden="true"></i></span>
                    <span><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></span>
                    <span><i className="fa fa-codepen fa-2x" aria-hidden="true"></i></span>
                </div>
                <div className="copywrite">
                    @NoCopywrites reserved And made with <i className="fa fa-heart" style={{color:'red', margin:'0 5px'}} aria-hidden="true"></i> in india
                </div>
            </section>
        </div>
    )
}

export default Contact
