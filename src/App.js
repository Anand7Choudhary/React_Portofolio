import logo from './logo.svg';
import './Style/App.css';
import './Style/header.css';
import './Style/Body1.css';
import './Style/about.css';
import "./Style/skills.css";
import "./Style/tasks.css";
import "./Style/portfolio.css";
import "./Style/faq.css";
import "./Style/profilepic.css";
import "./Style/contact.css";
import "./Style/footer.css";
import Header from './Components/Header';
import Body1 from "./Components/Body1";
import About from "./Components/About";
import Skills from './Components/Skills';
import Tasks from './Components/Tasks';
import Portfolio from './Components/Portfolio';
import Faq from './Components/Faq';
import Profilepic from './Components/Profilepic';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Body1 />
      <About />
      <Skills />
      <Tasks />
      <Portfolio />
      <Faq />
      <Profilepic />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
