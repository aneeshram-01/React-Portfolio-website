import React from "react";
import './skills.css';
import Ibm from '../../assets/ibm.png';
import Google from '../../assets/google.png';
import AppDesign from '../../assets/app-design.png'
const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Certificate</span>
            <span className="skillDesc"></span>
            <div className="skillBars">
         <a href="https://www.coursera.org/account/accomplishments/verify/VU4AKU5B46LP" target="_blank" rel="noopener noreferrer">
                <div className="skillBar">
                    <img src={Ibm} alt="Ibm" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>IBM Certification</h2>
                        <p> Introduction to Web Development with HTML, CSS, JavaScript</p>
                    </div>
                </div>
        </a>
         <a href="https://www.coursera.org/account/accomplishments/verify/EGAXD5TVGBVP" target="_blank" rel="noopener noreferrer">
            <div className="skillBar">
                    <img src={Ibm} alt="Ibm" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>IBM Certification</h2>
                        <p> Developing Front-End Apps with React</p>
                    </div>
                </div>
        </a>
         <a href="https://www.coursera.org/account/accomplishments/verify/F8B79GHPJ6AG" target="_blank" rel="noopener noreferrer">
            <div className="skillBar">
                    <img src={Ibm} alt="Ibm" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>IBM Certification</h2>
                        <p>Developing Back-End Apps with Node.js and Express</p>
                    </div>
                </div>
        </a>
 <a href="https://www.coursera.org/account/accomplishments/verify/NTRUWYAQYXH3" target="_blank" rel="noopener noreferrer">
                <div className="skillBar">
                    <img src={Google} alt="Google" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Google Cybersecurity Certification</h2>
                        <p>Completed Foundational Course</p>
                    </div>
                </div>
        </a>

            </div>
        </section>
    )
}

export default Skills ;
