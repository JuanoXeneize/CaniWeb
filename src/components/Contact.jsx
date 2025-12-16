import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Contáctanos</h2>
            <p>¿Listo para planear tu evento? Contáctanos para un presupuesto personalizado.</p>
            
            <div className="info-item">
              <Phone className="icon" />
              <span>+54 9 2234989932</span>
            </div>
            <div className="info-item">
              <Mail className="icon" />
              <span>contacto@canicobaeventos.com.ar</span>
            </div>
            <div className="info-item">
              <MapPin className="icon" />
              <span>Candelaria 2121, Mar del Plata, Argentina</span>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" placeholder="Tu Nombre" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="tucorreo@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" rows="4" placeholder="Cuéntanos sobre tu evento..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
