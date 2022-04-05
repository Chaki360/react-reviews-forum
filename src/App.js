
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';
import Navbar from './Components/HomePage/Navbar/Navbar';
import Reviews from './Components/HomePage/Reviews/Reviews';
import Dashboard from './Components/HomePage/Dashboard/Dashboard';
import Blogs from './Components/HomePage/Blogs/Blogs';
import About from './Components/HomePage/About-Us/About';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import Charts from './Charts/Charts';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/dashboard' element={<Charts></Charts>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='*' element={<NotFound />} />
      </Routes>




      <Footer></Footer>


    </div>

  );
}

export default App;
