import React from 'react'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import pfpimg from '../assets/img/Home_img.jpg';
import { TiSocialLinkedin } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { useInView } from 'react-intersection-observer';
import './Home.css';

export default function Home() {
    console.log(process.env.HI);

    // AnimatedSection component
    const AnimatedSection = ({ children }) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.5,
        });

        return (
          <div ref={ref} className={`animated-section ${inView ? 'animate' : ''}`}>
            {children}
          </div>
        );
    }

    const handle_resume_download = () => {
        const link = document.createElement('a');
        link.href = process.env.REACT_APP_PDF_DOWNLOAD_LINK;
        link.download = 'Vishal_Kumar.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        const btn = document.querySelector('.btn-box span');
        btn.textContent = 'Saving.. ';

        setTimeout(() => {
            btn.textContent = 'Resume ';
        }, 2000);
    }

    return (
        <section id='Home' className='home'>
            <AnimatedSection>
                <div className='home_container'>
                    <h1>Hi, I'm <span>Vishal</span> Kumar </h1>
                    <h3>Full Stack Developer</h3>
                    <p>
                        I am a Full Stack Developer with experience in building web applications using modern technologies like React, Node.js, Express.js, and MongoDB. I am passionate about learning new technologies and building scalable applications.
                    </p>
                    <div className="btn-box">
                        <a href="#Connect" className="btn">Connect &nbsp; <GrContactInfo/></a>
                        <a onClick={handle_resume_download} className="btn"><span>Resume</span> &nbsp; <IoCloudDownloadOutline/> </a>
                    </div>
                    <div className='home-sci'>
                        <a href="https://www.linkedin.com/in/vishal-kumar-375a25250/" target="_blank" rel="noreferrer"><TiSocialLinkedin/></a>
                        <a href="https://www.github.com/vishalverma9572" target="_blank" rel="noreferrer"><LuGithub/></a>
                        <a href="https://x.com/hey_vishalverma?t=3OK3GqPMBgpJle7qEQx84g&s=09" target="_blank" rel="noreferrer"><FaXTwitter/></a>
                    </div>
                </div>
            </AnimatedSection>
            <div className='home_img'>
                <div className="folded-image-container">
                    <img src={pfpimg} alt='Vishal Kumar'  />
                </div>
            </div>
        </section>
    )
}