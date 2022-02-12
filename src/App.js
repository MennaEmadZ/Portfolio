import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Portfolio from './Portfolio';

function App() {
  return (
  <>
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    <Footer/>
  </>
    );
}

 
export default App;