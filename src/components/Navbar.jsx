import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo" alt="Logo"></div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => setIsMenuOpen(false)}>Inicio</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Características</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Galería</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Reseñas</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          
          <div className="social-links-nav">
            <a href="https://wa.me/549223498993" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="bi bi-whatsapp" style={{ fontSize: '1.25rem' }}></i>
            </a>
            <a href="https://www.instagram.com/canicoba_eventos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram" style={{ fontSize: '1.25rem' }}></i>
            </a>
            <a href="https://www.facebook.com/canicobaeventos/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="bi bi-facebook" style={{ fontSize: '1.25rem' }}></i>
            </a>
          </div>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
