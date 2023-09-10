import './App.css';
import Navbar from "./PortfolioContainer/Navbar/Navbar"
import Profile from "./PortfolioContainer/Home/Profile"
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe"
import Resume from "./PortfolioContainer/Resume/Resume"
import TestiCarousel from "./PortfolioContainer/TestiCarousel/TestiCarousel"






function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <AboutMe/>
      <Resume/>
      <TestiCarousel/>

      
    </div>
  );
}

export default App;
