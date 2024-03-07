import React from 'react';
import './Intro.css';
import bg from '../../assets/image.jpg';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Intro=()=>{
    const [text] = useTypewriter({
        words: ["a Front-end Developer...","Cse Major(Undergrad)...", "and a Tech Enthusiast.....","Glad to see you!!"],
        loop:true,
        typeSpeed:40,
        deleteSpeed:40,
        delaySpeed:2500,
    });
    return(
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hey there!</span>
                <span className='introText'>I'm<span className='introName'>AneeshRam</span>,<br/>
                <span> {text}</span></span>
                <p className='introPara'>I am a skilled and passionate Web Designer  </p>
                <Link to='contact' smooth={true}><button className='btn'><img src={contactImg} alt='Mail Me'className='contactImg'/>Mail Me</button></Link>
            </div>
           
            <img src={bg} alt= "Profile" className="bg"></img>
            
        </section>
    )
}
export default Intro

