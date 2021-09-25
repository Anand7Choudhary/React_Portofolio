import logo from './logo.svg';
import './Style/App.css';
import './Style/header.css';
import './Style/Body1.css';
import './Style/about.css';
import Header from './Components/Header';
import Body1 from "./Components/Body1";
import About from "./Components/About";

function App() {
  return (
    <>
      <Header />
      <Body1 />
      <About />
    </>
  );
}

export default App;
