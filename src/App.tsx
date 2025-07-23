import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Examens from './pages/Examens';
import AddExamen from './pages/AddExamen';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>

      <Routes>
        {/* Redirection de la racine vers /examens */}
        <Route path="/" element={<Navigate to="/examens" replace />} />

        {/* Pages principales */}
        <Route path="/examens" element={<Examens />} />
        <Route path="/ajouter" element={<AddExamen />} />
      </Routes>
    </Router>
  );
}

export default App;


