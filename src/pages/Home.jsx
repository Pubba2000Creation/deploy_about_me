import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import TechnologiesSummary from '../components/TechnologiesSummary';
import ExperienceSummary from '../components/ExperienceSummary';
import ResearchSummaryComp from '../components/ResearchSummary';

import PropTypes from 'prop-types';

const Home = ({ theme, toggleTheme }) => {
    return (
        <div className="container mx-auto px-10 pt-20 lg:pt-24 min-h-screen">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <About />
            <TechnologiesSummary />
            <ExperienceSummary />
            <Projects />
            <ResearchSummaryComp />
            <Contact />
        </div>
    );
};

Home.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Home;
