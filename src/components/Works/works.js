import React from "react";
import './works.css';
import Portfolio1 from '../../assets/p10.png';
import Portfolio2 from '../../assets/p8.png';
import Portfolio3 from '../../assets/p13.png';
import Portfolio4 from '../../assets/p11.png';
import Portfolio5 from '../../assets/p7.png';
import Portfolio6 from '../../assets/p12.png';
const Works =()=> {
    return (
        <section id='Works'>
            <h2 className="worksTitle">My Work</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
        
         <a href="https://github.com/aneeshram-01/Shopper-Categorization" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio1} alt='Portfolio1' className="worksImg"/>
        </a>
        
         <a href="https://github.com/aneeshram-01/Meridian" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio2} alt='Portfolio2' className="worksImg"/>
        </a>
        
         
                <img src={Portfolio3} alt='Portfolio3' className="worksImg"/>
        
        
         <a href="https://github.com/aneeshram-01/TriviaHQ" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio4} alt='Portfolio4' className="worksImg"/>
        </a>
        
         <a href="https://github.com/aneeshram-01/Video-Piracy-Detection-and-Avoidance" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio5} alt='Portfolio5' className="worksImg"/>
        </a>

        <a href="https://github.com/aneeshram-01/React-Portfolio-website" target="_blank" rel="noopener noreferrer">
                <img src={Portfolio6} alt='Portfolio6' className="worksImg"/>
        </a>
        
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works;
