import React from 'react';

const Projects = () => {
  return (
    <div className='projects'>
      <h2>My Projects</h2>
      <div className='projects-container'>
        <div className='project-card'>
          <img src={require('../assets/poki.png')} alt='Pokémon Guide App' className='project-image' />
          <h3>Pokémon Guide App</h3>
          <p>
            Created an interactive Pokémon guide with comprehensive data fetched through real-time API integration. 
            Designed with a responsive layout to cater to users on all devices.
          </p>
          <ul className='tech-list'>
            <li className='tech-item'>React</li>
            <li className='tech-item'>API Integration</li>
            <li className='tech-item'>Responsive Design</li>
          </ul>
          <div className="btn-group">
            <a href='https://github.com/kiinshuk/Pokemon-Guide-App' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
              View on GitHub
            </a>
            <a href='https://kiinshuk.github.io/Pokemonsite/' target='_blank' rel='noopener noreferrer' className='btn btn-secondary'>
              Live
            </a>
          </div>
        </div>

        <div className='project-card'>
          <img src={require('../assets/ToDoList.png')} alt='To-Do List' className='project-image' />
          <h3>To-Do List</h3>
          <p>
            Developed an interactive To-Do List application using React. 
            Implemented CRUD operations and state management with React Hooks.
          </p>
          <ul className='tech-list'>
            <li className='tech-item'>React</li>
            <li className='tech-item'>CRUD Operations</li>
            <li className='tech-item'>React Hooks</li>
          </ul>
          <a href='https://github.com/kiinshuk/To-do-List' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            View on GitHub
          </a>
        </div>

        <div className='project-card'>
          <img src={require('../assets/Chatapp.png')} alt='Chat App' className='project-image' />
          <h3>Chat App</h3>
          <p>
            Created a real-time chat application using ReactJS, Firebase, and Chakra UI. 
            Integrated Firebase authentication and Firestore for secure data management.
          </p>
          <ul className='tech-list'>
            <li className='tech-item'>ReactJS</li>
            <li className='tech-item'>Firebase</li>
            <li className='tech-item'>Chakra UI</li>
          </ul>
          <a href='https://github.com/kiinshuk/Chatapp' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            View on GitHub
          </a>
        </div>

        <div className='project-card'>
          <img src={require('../assets/weatherapp.png')} alt='Weather Web App' className='project-image' />
          <h3>Weather Web App</h3>
          <p>
            Built a dynamic weather app with real-time API integration for location-based weather forecasts.
            Optimized for cross-device responsiveness.
          </p>
          <ul className='tech-list'>
            <li className='tech-item'>React</li>
            <li className='tech-item'>API Integration</li>
            <li className='tech-item'>Responsive Design</li>
          </ul>
          <a href='https://github.com/kiinshuk/Weather-web-app' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
            View on GitHub
          </a>
        </div>

        <div className='project-card'>
          <img src={require('../assets/News.png')} alt='News App' className='project-image' />
          <h3>News App</h3>
          <p>
            Developed a news app with real-time API integration for fetching the latest headlines across various categories. 
            Optimized for cross-device responsiveness to ensure a seamless user experience.
          </p>
          <ul className='tech-list'>
            <li className='tech-item'>React</li>
            <li className='tech-item'>API Integration</li>
            <li className='tech-item'>Responsive Design</li>
          </ul>
          <a href='https://github.com/kiinshuk/News-app' target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
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
