import React from "react";


export default function Info() {
    return (
        <div className="info--section">
            <img src="./images/eu.jpeg" alt="photo ID" className="main--img"/>
            <h2>Ioana Oprea</h2>
            <h4>Junior Frontend Developer</h4>
            <a href="https://ioanaoprea.com/" className="portofolio">See my work</a>
            <div className="links">
                <a href = "mailto:oprea.ioanna@gmail.com" className="email--btn">📧 Email</a>
                <a href="https://www.linkedin.com/in/ioanaaoprea/" className="linkedin--btn">LinkedIn</a>
            </div>
        </div>
    )
}