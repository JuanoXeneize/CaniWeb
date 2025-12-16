import { useState } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Nuestros Eventos Pasados</h2>
          <p>Mira cómo nuestras carpas transforman los espacios.</p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item item-1" onClick={() => openModal("/gallery-1.jpg", "Evento corporativo")}>
            <img src="/gallery-1.jpg" alt="Evento corporativo" />
          </div>
          <div className="gallery-item item-2" onClick={() => openModal("/gallery-2.jpg", "Despedida de año")}>
            <img src="/gallery-2.jpg" alt="Despedida de año" />
          </div>
          <div className="gallery-item item-3" onClick={() => openModal("/gallery-3.jpg", "Evento fin de año corporativo")}>
            <img src="/gallery-3.jpg" alt="Evento fin de año corporativo" />
          </div>
          <div className="gallery-item item-4" onClick={() => openModal("/gallery-4.jpg", "Boda en Playa")}>
            <img src="/gallery-4.jpg" alt="Boda en Playa" />
          </div>
            <div className="gallery-item item-5" onClick={() => openModal("/gallery-5.jpg", "Boda en Playa")}>
            <img src="/gallery-5.jpg" alt="Interio piso de deck" />
          </div>

        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={32} />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
