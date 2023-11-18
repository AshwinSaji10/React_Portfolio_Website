import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
