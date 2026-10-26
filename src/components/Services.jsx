import { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";

const services = [
  {
    id: 1,
    icon: "💻",
    title: "Web Development",
    category: "Development",
    description:
      "Fast, responsive, and scalable websites built for your business goals.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "UI/UX Design",
    category: "Design",
    description:
      "Intuitive interfaces and delightful experiences your users will love.",
  },
  {
    id: 3,
    icon: "📈",
    title: "SEO Optimization",
    category: "Marketing",
    description:
      "Improve search visibility and connect with the right audience.",
  },
  {
    id: 4,
    icon: "🚀",
    title: "Digital Marketing",
    category: "Marketing",
    description:
      "Reach more customers with targeted, data-driven marketing strategies.",
  },
  {
    id: 5,
    icon: "⚙️",
    title: "API Integration",
    category: "Development",
    description:
      "Connect your tools and automate workflows with reliable integrations.",
  },
  {
    id: 6,
    icon: "🧠",
    title: "Brand Strategy",
    category: "Design",
    description:
      "Build a recognizable brand identity that sets you apart from competitors.",
  },
];

const categories = ["All", "Development", "Design", "Marketing"];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <section className="section services" id="services">
      <div className="section-heading">
        <span className="eyebrow">WHAT WE DO</span>

        <h2>
          Services built for your <span>next big thing.</span>
        </h2>

        <p>
          Everything you need to build, launch, and grow your digital
          presence.
        </p>
      </div>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category ? "filter active" : "filter"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="services-grid">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}