
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Reviews from './Components/HomePage/Reviews/Reviews';
import Dashboard from './Components/HomePage/Dashboard/Dashboard';
import Blogs from './Components/HomePage/Blogs/Blogs';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<Dashboard></Dashboard>} />
      </Routes>







    </div>

  );
}

export default App;
