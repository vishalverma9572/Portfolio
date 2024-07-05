import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from 'emailjs-com';
import './Connect.css';

const Connect = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({ email: '', subject: '', message: '' });
    const [successmsg, setSuccessMsg] = useState('');

    const { ref, inView } = useInView({
        triggerOnce: false, // Animation will trigger only once
        threshold: 0.4,    // Trigger when 30% of the section is in view
    });

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        let errors = { email: '', subject: '', message: '' };

        
        if (!validateEmail(email)) {
            errors.email = 'Please enter a valid email address.';
            valid = false;
        }
        if (subject.trim() === '') {
            errors.subject = 'Subject cannot be empty.';
            valid = false;
        }
        if (message.trim() === '') {
            errors.message = 'Message cannot be empty.';
            valid = false;
        }

        setErrors(errors);

        if (valid) {
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);
            setEmail('');
            setSubject('');
            setMessage('');
            
            // Handle form submission logic here
        }
        if (valid) {
            const templateParams = {
                from_email: email,
                subject: subject,
                message: message,
            };
            // const service_id = process.env.EMAIL_SERVICE_ID;
            const service_id = process.env.REACT_APP_EMAIL_SERVICE_ID;
            const template_id = process.env.REACT_APP_TEMPLATE_ID;
            const user_id = process.env.REACT_APP_PUBLIC_KEY;

            console.log(service_id, template_id, templateParams, user_id);
            // setErrors({ email: '', subject: '', message: 'currently this service is not woking and is under maintainance use below email icon to mail me' });
            
            emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSuccessMsg('Your message was sent successfully! I will reach out to you soon...');
                }, (error) => {
                    console.log('FAILED...', error);
                });

            

            
            
        }
    };

    return (
        <section id="Connect" className="connect" ref={ref}>
            <h1>Connect with Me</h1>
            <h2>Contact Form</h2>
            <form className={`connect-form ${inView ? 'animate' : ''}`} onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <input 
                    type="text" 
                    placeholder="Subject" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                    required 
                />
                {errors.subject && <p className="error">{errors.subject}</p>}
                <textarea 
                    placeholder="Message" 
                    rows="6" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                />
                {errors.message && <p className="error">{errors.message}</p>}
                <button type="submit">Send Message</button>
                {successmsg && <p className="success">{successmsg}</p>}
            </form>
            <br></br>
            <br></br>
            <span>or</span>
            <br></br>
            <br></br>
            <h2> Connect through</h2>
            <br></br>
            
            <div className='home-sci'>
                        <a href="https://www.linkedin.com/in/vishal-kumar-375a25250/" target="_blank" rel="noreferrer"><TiSocialLinkedin/></a>
                        <a href="https://www.github.com/vishalverma9572" target="_blank" rel="noreferrer"><LuGithub/></a>
                        <a href="https://www.instagram.com/hey_vishalverma" target="_blank" rel="noreferrer"><IoLogoInstagram/></a>
                        <a href="https://x.com/hey_vishalverma?t=3OK3GqPMBgpJle7qEQx84g&s=09" target="_blank" rel="noreferrer"><FaXTwitter/></a>
                        <a href="https://wa.me/919546926734" target="_blank" rel="noreferrer"><IoLogoWhatsapp/></a>
                        <a href="tel:+919546926734" target="_blank" rel="noreferrer"><IoCallOutline/></a>
                        <a href="mailto:vishalverma9572@gmail.com" target="_blank" rel="noreferrer"><MdOutlineEmail/></a>

            </div>  
            <br></br>
            <br></br>
        </section>
    );
};

export default Connect;
