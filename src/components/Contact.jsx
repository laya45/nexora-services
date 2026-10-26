import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      service: "",
      message: "",
    });
  }

  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <span className="eyebrow">LET'S WORK TOGETHER</span>

        <h2>
          Have a project in <span>mind?</span>
        </h2>

        <p>
          Tell us what you're building. We'd love to hear about it.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Your name
            <input
              name="name"
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              minLength={2}
              required
            />
          </label>

          <label>
            Email address
            <input
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label>
          Service you're interested in
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="SEO Optimization">SEO Optimization</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="API Integration">API Integration</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Tell us about your project
          <textarea
            name="message"
            placeholder="What would you like to build?"
            value={form.message}
            onChange={handleChange}
            minLength={10}
            rows={5}
            required
          />
        </label>

        <button type="submit" className="btn btn-primary">
          Send Message →
        </button>

        {submitted && (
          <p className="success-message" role="status">
            Thank you! Your message has been validated successfully.
            This demo does not send messages to an inbox yet.
          </p>
        )}
      </form>
    </section>
  );
}