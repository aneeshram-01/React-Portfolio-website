import React from "react";
import './skills.css';
import Ibm from '../../assets/ibm.png';
import Google from '../../assets/google.png';
import AppDesign from '../../assets/app-design.png'
const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">Explain Explain Explain Explain Explain Explain Explain </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Ibm} alt="Ibm" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>IBM Certification</h2>
                        <p>Frontend using HTML, CSS, JavaScript, React.js<br/>Backend using Express.js and Node.js</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Google} alt="Google" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Google Cybersecurity Certification</h2>
                        <p>Completed Foundational Course</p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills ;
