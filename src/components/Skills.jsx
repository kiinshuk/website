import React from 'react';
import '../App.css'; // Ensure this file imports your CSS

const skills = [
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript.png' },
  { name: 'React.js', icon: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/bootstrap.png' },
  { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/tailwindcss.png' },
  { name: 'Node.js', icon: 'https://img.icons8.com/color/48/nodejs.png' },
  { name: 'Express.js', icon: 'https://img.icons8.com/color/48/express.png' },
  { name: 'MySQL', icon: 'https://img.icons8.com/color/48/mysql.png' },
  { name: 'Git', icon: 'https://img.icons8.com/color/48/git.png' },
  { name: 'HTML', icon: 'https://img.icons8.com/color/48/html-5.png' },
  { name: 'CSS', icon: 'https://img.icons8.com/color/48/css3.png' }
 
];

const Skills = () => {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <div className='skills-container'>
        {skills.map((skill) => (
          <div key={skill.name} className='skill-card'>
            <img src={skill.icon} alt={`${skill.name} icon`} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
