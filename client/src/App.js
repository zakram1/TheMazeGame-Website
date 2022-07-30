import './App.css';
import Banner from './components/banner.js';
import Navbar from './components/navbar.js';
import { Route, Routes } from 'react-router-dom';
import LevelOne from './pages/levelone.js';
import LevelTwo from './pages/leveltwo.js';
import LevelThree from './pages/levelthree.js';
import LevelFour from './pages/levelfour.js';
import LevelFive from './pages/levelfive.js';

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<LevelOne />} />
        <Route path="/leveltwo" element={<LevelTwo />} />
        <Route path="/levelthree" element={<LevelThree />} />
        <Route path="/levelfour" element={<LevelFour />} />
        <Route path="/levelfive" element={<LevelFive />} />
      </Routes>
    </div>
  );
}

export default App;
