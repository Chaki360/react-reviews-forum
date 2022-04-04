
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Reviews from './Components/HomePage/Reviews/Reviews';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />



      </Routes>





    </div>
  );
}

export default App;
