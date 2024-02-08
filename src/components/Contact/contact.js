import React, {useRef} from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
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
                <img className='link' src={FacebookIcon} alt='Facebook'/>
                <img className='link' src={TwitterIcon} alt='Twitter'/>
                <img className='link' src={InstagramIcon} alt='Instagram'/>

            </div>
            
        </form>
    </div>
    </section>
  )
}

export default Contact
