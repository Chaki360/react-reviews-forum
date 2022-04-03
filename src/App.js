
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './Components/HomePage/Homepage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>} />




      </Routes>





    </div>
  );
}

export default App;
