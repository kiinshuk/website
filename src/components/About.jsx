import React, { useState } from 'react';
import '../App.css';

const experiences = [
  {
    title: "Software Engineer Intern - Katha Infocom Pvt Ltd",
    description: `Focused on front-end development using <span class="technology">React.js</span> and <span class="technology">Tailwind CSS</span> to enhance web applications.`
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
        Hi, I'm Kinshuk Sharma, a passionate web developer specializing in responsive and visually appealing UIs. With expertise in <span className="technology">React.js</span>, <span className="technology">Tailwind CSS</span>, and JavaScript, I strive to create impactful web experiences.
      </p>
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`experience-item ${activeIndex === index ? 'open' : ''}`}
          onClick={() => toggleExperience(index)}
        >
          <div className="experience-title">
            {experience.title}
            <span className="toggle-icon">
              {activeIndex === index ? '▲' : '▼'}
            </span>
          </div>
          <div className="experience-description">
            <div className='exp'>
              <p className='period'>Jan '24 - Jun '24</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
