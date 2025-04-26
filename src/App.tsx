import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PerfilStyledComponents from './components/PerfilStyledComponents';
import PerfilTailWind from './components/PerfilTailWind';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <div className="flex-1 flex justify-center items-center bg-gray-300">
          <Routes>
            <Route path="/" element={<h1>PESQUISE UM USUÁRIO DO GITHUB!!!</h1>} />
            <Route path="/perfiltailwind" element={<PerfilTailWind />} />
            <Route path="/perfilstyledcomponents" element={<PerfilStyledComponents />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;