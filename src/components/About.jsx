export default function About() {
  return (
    <section className="section about" id="about">
      <div className="about-visual">
        <div className="about-badge">Ideas into impact ✦</div>
        <div className="about-number">01</div>
        <div className="about-decoration">N.</div>
      </div>

      <div className="about-content">
        <span className="eyebrow">A LITTLE ABOUT US</span>

        <h2>
          We believe great digital experiences change{" "}
          <span>everything.</span>
        </h2>

        <p>
          Nexora Digital is a creative technology agency that partners
          with businesses to solve real problems through thoughtful
          design, modern development, and measurable digital strategies.
        </p>

        <ul className="about-list">
          <li>✓ User-first design and development</li>
          <li>✓ Transparent communication</li>
          <li>✓ Scalable, future-ready solutions</li>
        </ul>

        <a href="#contact" className="btn btn-primary">
          Work with us →
        </a>
      </div>
    </section>
  );
}