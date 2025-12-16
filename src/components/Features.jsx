import { Shield, Sun, Wind, Anchor } from 'lucide-react';
import './Features.css';

const featuresList = [
  {
    icon: <Shield size={32} />,
    title: "100% Impermeable",
    description: "Nuestra tela de alta tecnología asegura que tu evento permanezca seco, sin importar el clima."
  },
  {
    icon: <Sun size={32} />,
    title: "Resistente a UV",
    description: "Proporciona excelente sombra y protección contra los rayos UV durante eventos de verano."
  },
  {
    icon: <Wind size={32} />,
    title: "Estable al Viento",
    description: "Diseño aerodinámico y anclaje seguro mantienen la carpa estable en vientos fuertes."
  },
  {
    icon: <Anchor size={32} />,
    title: "Montaje Versátil",
    description: "Puede montarse en cualquier terreno: césped, arena, hormigón, decks o asfalto ."
  }
];

const Features = () => {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="section-header">
          <h2>¿Por Qué Elegir Nuestras Carpas?</h2>
          <p>Diseñadas para rendimiento, creadas para elegancia.</p>
        </div>
        
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
