import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects"
import Contacts from "./Contacts"
import Background from "./Background"
const home = () => {
  return <div id = "index">
    <div>
      <head>
        <title>Vishnu Manoj</title>
      </head>
    </div>
    <Background></Background>
      
      <Home></Home>   
      <About></About>
      <Projects></Projects>
      <Contacts></Contacts>
    
    
  </div>;
};

export default home;