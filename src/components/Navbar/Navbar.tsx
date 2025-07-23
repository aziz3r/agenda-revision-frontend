import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ background: '#1e90ff', padding: '10px' }}>
      <Link to="/examens" style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }}>Examens</Link>
      <Link to="/ajouter" style={{ color: 'white', textDecoration: 'none' }}>Ajouter un examen</Link>
    </nav>
  );
};

export default Navbar;
