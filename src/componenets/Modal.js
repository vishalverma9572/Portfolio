import React from 'react';
import './Modal.css';
import { IoMdClose } from "react-icons/io";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { PiCode } from "react-icons/pi";

const Modal = ({ show, onClose, project }) => {
    if (!show || !project) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    <IoMdClose />
                </span>
                <h2>{project.title}</h2>
                <p className='project-duration'>{project.duration}</p>

                {/* <p>{project.briefDescription}</p> */}

                <ul>
                    {project.description.map((point, index) => (
                        <li key={index}> <GiBottomRight3dArrow/>   {point}</li>
                    ))}
                </ul>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    See Code &nbsp; <PiCode/>
                </a>
            </div>
        </div>
    );
};

export default Modal;
