import './Testimonials.css';

const testimonials = [
  {
    name: "Sol Ramella",
    role: "Organizadora de Bodas",
    text: "La carpa fue absolutamente impresionante. Creó la atmósfera perfecta para la recepción. ¡Muy recomendada!"
  },
  {
    name: "Miguel Chellini",
    role: "Director de Eventos",
    text: "Servicio profesional de principio a fin. El equipo fue eficiente y la calidad de la carpa es de primera. Se integra muy bien a cualquier paisaje"
  },
  {
    name: "Emma Saravia",
    role: "Novia",
    text: "Nuestra boda en el jardín fue mágica gracias a Canicoba Eventos. Se vio hermosa en las fotos un toque elegante y moderno."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Lo Que Dicen Nuestros Clientes</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
