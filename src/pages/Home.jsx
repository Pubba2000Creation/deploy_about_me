import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Technologies from "../components/Technologies";
import Research from '../components/Research';

const Home = () => {
    return (
        <div className="container mx-auto px-10">
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Experience />
            <Projects />
            <Research />
            <Contact />
        </div>
    );
};

export default Home;
