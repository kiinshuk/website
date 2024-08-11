
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  

  return (
    <div className='hero'>
      <div className='centered'>
        <h1>Front-End React Developer</h1>
        <p>
          Hi, I am <span className="name">Kinshuk</span>, a self-taught 
            Front-End React Developer.
        </p>
        <div className='buttn'>
        <a href="#contact" className="btn btn-primary">Hire me!</a>

        <a href="/resume.pdf" download="Kinshuk_Sharma_Resume.pdf" className="btn btn-primary">
            Download my CV
          </a>
        </div>
        <div className='socials'>
          <a href="https://linkedin.com/in/kinshuk-sharma-0a868120a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/kiinshuk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
