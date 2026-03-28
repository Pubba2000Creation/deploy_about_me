import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Technologies from "../components/Technologies";
import Research from '../components/Research';

const Home = () => {
    return (
        <div className="container mx-auto px-10 pt-20 lg:pt-24">
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Research />
            <Contact />
        </div>
    );
};

export default Home;
