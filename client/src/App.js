import './App.css';
import Navbar from "./PortfolioContainer/Navbar/Navbar"
import Profile from "./PortfolioContainer/Home/Profile"
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe"
import Resume from "./PortfolioContainer/Resume/Resume"
import TestiCarousel from "./PortfolioContainer/TestiCarousel/TestiCarousel"
import Contact from "./PortfolioContainer/Contact/Contact"






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <AboutMe/>
      <Resume/>
      <TestiCarousel/>
      <Contact/>

      
    </div>
  );
}

export default App;
