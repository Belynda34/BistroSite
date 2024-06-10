import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Pages from './Pages';
import Contact from './Components/Contact';
import Book from './Components/Book';

function App() {
  return (
  
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        
        <Route path='/menu' Component={Menu}/>
        <Route path='/pages'Component={Pages}/>
        <Route path='/contact'Component={Contact}/>
        <Route path='/book'Component={Book}/>
      </Routes>
      <Footer/>
    </Router>
      
    </>

     
    
  );
}

export default App;
