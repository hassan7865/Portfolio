import './app.scss'
import About from './components/AboutMe/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Portfolio from './components/Portfolio/portfolio';
const App = () => {
  return (
    <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section><Parallax/></section>
    <section id='About'><About/></section>
    <section><Parallax type={"work"}/></section>
    <Portfolio/>
    <section id='Contact'><Contact/></section>
    </div>
  );
};

export default App;
