import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-natural-300 antialiased selection:bg-cyan-300 selection:text-cyan-800 min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      
      <div className='container mx-1 px-10'>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
