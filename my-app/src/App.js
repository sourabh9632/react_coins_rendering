 
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
  
import Header from './components/Header';
 import Coins from './components/Coins';
import Exchange from './components/Exchange';
 import Home from './components/Home';
function App() {

 

  return (
   
    
 
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/coins' element={<Coins />}></Route>
        <Route exact path='/exchange' element={< Exchange />}></Route>
        
 
   
   
      </Routes>
     
    
    </Router>


  );
}

export default App;