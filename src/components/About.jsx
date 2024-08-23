import React, { useState } from 'react';
import '../App.css';

const experiences = [
  {
    title: "Front-End Developer Intern - Analytics Jobs",
    description: "Developed and maintained the front-end of a job analytics platform using React.js and Bootstrap. Worked closely with the design team to implement responsive web designs."
  }
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExperience = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
      Hello! I'm Kinshuk Sharma, a self-taught web developer with a strong focus on crafting responsive and visually appealing user interfaces. Currently, I'm pursuing my B.Tech in Computer Science at Jaipur National University, where I've honed my skills in React.js, Tailwind CSS, and JavaScript. My journey in web development has been driven by a passion for learning and creating impactful projects.
      </p>
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`experience-item ${activeIndex === index ? 'open' : ''}`}
          onClick={() => toggleExperience(index)}
        >
          <div className="experience-title">
          Software Engineer Intern
            <span className="toggle-icon">
              {activeIndex === index ? '▲' : '▼'}
            </span>
          </div >
          <div className="experience-description">
            <div className='exp'>
          <p className='comp'>Katha Infocom Pvt Ltd, Advertising Services, Kochi, Kerala</p>
          <p className='period'>Jan,24 to Jun,24</p>
          </div>
          <p>
              As a Software Engineer Intern at Katha Infocom, I primarily focused on front-end development using React.js and Tailwind CSS. During my tenure, I was responsible for designing and implementing user interfaces that significantly enhanced the visual appeal and functionality of various web applications. This experience not only allowed me to refine my skills in creating responsive, high-performance interfaces but also deepened my understanding of modern web development practices.
          </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
