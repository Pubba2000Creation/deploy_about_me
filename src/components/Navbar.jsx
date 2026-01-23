
import logo from '../assets/kevinRushLogo-removebg-preview.png';
import { FaLinkedin, FaGithub, FaFacebook, FaMedium } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6 px-8">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-24 lg:w-32 h-auto" src={logo} alt="my logo image" />
      </div>

      <div className="hidden lg:flex items-center justify-center gap-8 text-neutral-300 text-sm uppercase tracking-widest font-light">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#technologies" className="hover:text-white transition-colors">Technologies</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#research" className="hover:text-white transition-colors">Research</a>
      </div>

      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/prabashana-pubudu-a707b0230/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ fontSize: '1.5rem', color: 'white' }} />
        </a>
        <a href="https://github.com/Pubba2000Creation" target="_blank" rel="noopener noreferrer">
          <FaGithub style={{ fontSize: '1.5rem', color: 'white' }} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={{ fontSize: '1.5rem', color: 'white' }} />
        </a>
        <a href="https://medium.com/@prabashanapubudu" target="_blank" rel="noopener noreferrer">
          <FaMedium style={{ fontSize: '1.5rem', color: 'white' }} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
