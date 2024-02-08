import React from 'react';
import './Intro.css';
import bg from '../../assets/image.jpg';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Intro=()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hey there!!</span>
                <span className='introText'>I'm <span className='introName'>Aneesh</span><br/>A Developer</span>
                <p className='introPara'>I am a skilled and passionate web designer </p>
                <Link to='contact' smooth={true}><button className='btn'><img src={contactImg} alt='Mail Me'className='contactImg'/>Mail Me</button></Link>
            </div>
            <img src={bg} alt= "Profile" className="bg"></img>
        </section>
    )
}
export default Intro
