// src/components/Skills.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Skill.css';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce:false,
    threshold: 0.1,
  });
  

  return (
    <section id='Skills' className={`skills`} >
      <h2>Technical Skills</h2>
      <div className={`skills-content ${inView ? 'animate' : ''}`} ref={ref}>
        <div className="skills-card">
          <h3>Programming</h3>
          <ul>
            <li>C/C++</li>
            
            <li>Python</li>
            <li>Java</li>
            <li>Data Structures & Algorithms</li>
            
          </ul>
        </div>
        <div className="skills-card">
          <h3>Web Developement</h3>
          <ul>
            
            
            <li>Html</li>
            <li>Css</li>
            <li>JavaScript</li>
            
          </ul>
        </div>
        <div className="skills-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Neo4j</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Web Frameworks</h3>
          <ul>
            <li>NodeJs</li>
            <li>ReactJs</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
