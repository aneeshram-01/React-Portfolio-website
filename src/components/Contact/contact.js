import React, {useRef} from 'react';
import './contact.css';
import FacebookIcon from '../../assets/p20.png';
import TwitterIcon from '../../assets/ptweet.png';
import InstagramIcon from '../../assets/instagram.png';
import GithubIcon from '../../assets/pgit.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_hyw1fcp', 'template_m4mixif', form.current, {
        publicKey: 'NKQtp5dxvIckZLw6q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contactPage'>
    <div className='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>"I'd love to hear from you - contact me!"</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input className='name' type='text' placeholder='Your Name' name='your_name'/>
            <input className='email' type='email' placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button className='submitBtn' type='submit' value='Send'>Submit</button>
            <div className='links'>
    <a href="https://www.linkedin.com/in/aneeshram-bhat-364a82249/" target="_blank" rel="noopener noreferrer">
                <img className='link' src={FacebookIcon} alt='Facebook'/>
    </a>
  <a href="https://x.com/aneesh_ram01?t=GmvCmz5DeGtIwL16gio12g&s=08" target="_blank" rel="noopener noreferrer">
                <img className='link' src={TwitterIcon} alt='Twitter'/>
    </a>
     <a href="https://www.instagram.com/aneesh.ram01/" target="_blank" rel="noopener noreferrer">
                <img className='link' src={InstagramIcon} alt='Instagram'/>
    </a>
<a href="https://github.com/aneeshram-01" target="_blank" rel="noopener noreferrer">
                <img className='link' src={GithubIcon} alt='Github'/>
    </a>
            </div>
            
        </form>
    </div>
    </section>
  )
}

export default Contact
