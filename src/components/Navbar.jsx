
import logo from '../assets/kevinRushLogo-removebg-preview.png';
import { FaLinkedin, FaGithub, FaFacebook, FaMedium } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex justify-between">

      <div className="flex mt-4">
        <div>
        <img className="w-44 h-auto" src={logo} alt="my logo image" />
        </div>
        
      </div>
      <div className="flex items-center space-x-5 absolute top-16 right-10">
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
