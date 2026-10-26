export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon">{service.icon}</div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <a href="#contact" className="service-link">
        Learn more <span>↗</span>
      </a>
    </article>
  );
}