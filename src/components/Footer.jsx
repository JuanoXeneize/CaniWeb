import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Canicoba Eventos SA</h3>
            <p>Carpas beduinas y estructurales para fiestas y eventos.</p>
            <p>REPRESENTANTE TENTICKLE COSTA ATLANTICA</p>
          </div>
          <div className="footer-links">
            <a href="https://wa.me/5492234989932">WhatsApp</a>
            <a href="https://www.instagram.com/canicoba_eventos/">Instagram</a>
            <a href="https://www.facebook.com/canicobaeventos/">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Canicoba Eventos SA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
