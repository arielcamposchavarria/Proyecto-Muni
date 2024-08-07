
import { Link } from 'react-router-dom';
import './StyleInicial.css';

function Inicial() {
  return (
    <div className="home-container">
      <div className="home-content">
    <div className="welcome-page">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>MyApp</h1>
        </div>
        <div className="navbar-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </nav>
      <main className="welcome-content">
        <h2>Welcome to MyApp!</h2>
        <p>Your journey starts here.</p>
      </main>
    </div>
    </div>
    </div>
  );
}

export default Inicial;