import React, { useState } from 'react';
import './Projects.css';
import Modal from './Modal';
import { PiCode } from "react-icons/pi";
import { CgDetailsMore } from "react-icons/cg";
import { useInView } from 'react-intersection-observer';

const projects = [
    {
        title: 'LinkHub',
        duration: 'April 2024 - May 2024',
        description: [
            'Created a full-stack web application using MERN stack, enabling users to create personalized linktrees or personal pages.',
            'Implemented features allowing users to create and manage linktrees or pages with secured JWT authentication, including publish and unpublish capabilities.',
            'Designed and Integrated password reset functionality with email verification, ensuring seamless user account management and security measures.'
        ],
        briefDescription: 'A full-stack web application for creating personalized linktrees or personal pages.',
        codeLink: 'https://github.com/vishalverma9572/linkhub'
    },
    {
        title: 'BlogPost',
        duration: 'Dec 2023',
        description: [
            'Architected an interactive web application with React, enabling efficient blog and Todo list management, and implemented real-time data synchronization through a remote JSON server, enhancing user productivity by 50%.',
            'Implemented Axios for making HTTP requests to the remote JSON server, ensuring seamless communication and data synchronization between frontend and backend.'
        ],
        briefDescription: 'An interactive web application for blog and Todo list management.',
        codeLink: 'https://github.com/vishalverma9572/blogpost'
    },
    {
        title: 'HubDates',
        duration: 'Dec 2023',
        description: [
            'Developed a React-based news website that allows users to read real-time news articles across various categories such as sports, science, and technology, utilizing the News API for up-to-date content.',
            'Created a responsive and user-friendly interface with optimized performance, ensuring seamless navigation and readability on desktops, tablets, and mobile devices.'
        ],
        briefDescription: 'A React-based news website for real-time news articles.',
        codeLink: 'https://github.com/vishalverma9572/hubdates'
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const AnimatedSection = ({ children }) => {
        const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.35,
        });
    
        return (
            <div ref={ref} className={`animated-section ${inView ? 'animate' : ''}`}>
                {children}
            </div>
        );
    };
    const handleMoreDetails = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="Projects" className="projects">
            <h1><span>Projects</span></h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <AnimatedSection key={index}>
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.duration}</p>
                        <p>{project.briefDescription}</p>
                        <div className="btn-box">
                            <a className='btn' onClick={() => handleMoreDetails(project)}>More Details &nbsp; <CgDetailsMore/>
                                 </a>
                            <a className='btn' href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                See Code  &nbsp;  <PiCode/>
                            </a>
                        </div>
                        
                    </div>
                    </AnimatedSection>
                ))}
            </div>
            <Modal show={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
        </section>
    );
};

export default Projects;
