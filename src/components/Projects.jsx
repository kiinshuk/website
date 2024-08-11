import React from 'react';

const Projects = () => {
  return (
    <div className='projects'>
      <h2>My Projects</h2>
      <div className='projects-container'>
        <div className='project-card'>
          <h3>To-Do List</h3>
          <p>
            Developed an interactive To-Do List application using React. 
            Implemented CRUD operations and state management with React Hooks.
          </p>
          <a href='https://github.com/kiinshuk/To-do-List' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            View on GitHub
          </a>
        </div>
        <div className='project-card'>
          <h3>Chat App</h3>
          <p>
            Created a real-time chat application using ReactJS, Firebase, and Chakra UI. 
            Integrated Firebase authentication and Firestore for secure data management.
          </p>
          <a href='https://github.com/kiinshuk/Chatapp' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            View on GitHub
          </a>
        </div>
        <div className='project-card'>
          <h3>Weather Web App</h3>
          <p>
            Built a dynamic weather app with real-time API integration for location-based weather forecasts.
            Optimized for cross-device responsiveness.
          </p>
          <a href='https://github.com/kiinshuk/Weather-web-app' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            View on GitHub
          </a>
        </div>
      </div>
      <div className='see-more'>
        <a href='https://github.com/kiinshuk'>See More</a>
      </div>
    </div>
  );
};

export default Projects;
