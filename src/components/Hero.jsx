import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${import.meta.env.BASE_URL}hero-bg.mp4`} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        <div className="overlay"></div>
      </div>

      <div className="container hero-content">
        <h1 className="animate-fade-in">Lujo natural para momentos inolvidables</h1>
        <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Carpas beduinas premium para eventos inolvidables. Elegantes,
          impermeables y adaptables a cualquier lugar.
        </p>
        <div
          className="hero-actions animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#contact" className="btn btn-primary">
            Solicitar Presupuesto
          </a>
          <a href="#gallery" className="btn btn-outline">
            Ver Galería
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
