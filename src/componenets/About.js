import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling
import pfpimg from '../assets/img/1719653504206-removebg-preview.png';

const About = () => {
    const handleiiitdmj=()=>{
        const link = document.createElement('a');
        link.href="https://www.iiitdmj.ac.in/";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    return (
        <section id="About" className='about-section' >
            <h2>About Me</h2>
            <div className="about-me">
                <div className="about-me-container">
                    
                    <p>
                        I'm <span>Vishal Kumar</span>, a passionate Full Stack Developer currently pursuing my Bachelor's degree inComputer Science at the <span style={{cursor:'pointer'}} onClick={handleiiitdmj}>Indian Institute of Information Technology, Design and Manufacturing, Jabalpur</span>. I love exploring new technologies and building scalable web applications that solve real-world problems.
                    </p>
                    <p>
                        My journey into programming started with a curiosity to understand how things work behind the scenes. Over time, I've developed proficiency in languages like C/C++, Javascript, Python, and Java, alongside frameworks like React and Node.js. Beyond coding, I enjoy contributing to open-source projects and learning from the vibrant developer community.
                    </p>
                </div>
                <div className='about_img'>
                    <img src={pfpimg} alt='Vishal Kumar' />
                </div>
            </div>
        </section>
    );
};

export default About;
