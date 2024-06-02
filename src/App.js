import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
function App() {
  return (
      <>
      <Router>
          <Navbar />
          {/* <h1> what is this? </h1> */}
            <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
              
            </Routes>
          
        </Router>
      
      </>
      
    
  );
}

export default App;