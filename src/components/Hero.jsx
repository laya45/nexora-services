
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">✦ YOUR DIGITAL GROWTH PARTNER</span>

        <h1>
          We turn your ideas into{" "}
          <span>digital experiences.</span>
        </h1>

        <p>
          We help businesses grow with beautiful websites,
          smart technology, and digital strategies that deliver results.
        </p>

        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">
            Explore Services →
          </a>

          <a href="#contact" className="btn btn-outline">
            Let's Talk
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>50+</strong>
            <span>Projects delivered</span>
          </div>

          <div>
            <strong>30+</strong>
            <span>Happy clients</span>
          </div>

          <div>
            <strong>98%</strong>
            <span>Client satisfaction</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow" />

        <div className="visual-main">
          <div className="visual-orb">N</div>
          <p>Build something extraordinary.</p>

          <div className="visual-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="floating-card card-top">
          ✦ Creative solutions
        </div>

        <div className="floating-card card-bottom">
          ↗ Growth starts here
        </div>
      </div>
    </section>
  );
}
