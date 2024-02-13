import React from 'react';
import './Intro.css';
import bg from '../../assets/image.jpg';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Intro=()=>{
    const [text] = useTypewriter({
        words: ["a Developer...","Cse Major(Undergrad)...", "a Tech Enthusiast.....","Glad to see you!!"],
        loop:true,
        typeSpeed:30,
        deleteSpeed:30,
        delaySpeed:3000,
    });
    return(
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hey there!</span>
                <span className='introText'>I'm<span className='introName'>AneeshRam</span>,<br/>
                <span> {text}</span></span>
                <p className='introPara'>I am a skilled and passionate Web Designer <br/> and ML Engineer </p>
                <Link to='contact' smooth={true}><button className='btn'><img src={contactImg} alt='Mail Me'className='contactImg'/>Mail Me</button></Link>
            </div>
           
            <img src={bg} alt= "Profile" className="bg"></img>
            
        </section>
    )
}
export default Intro

