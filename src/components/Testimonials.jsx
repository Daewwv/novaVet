export default function Testimonials({ site }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Depoimentos</span>

          <h2>O que nossos clientes dizem.</h2>

          <p>
            Experiências de tutores que confiaram no atendimento da NovaVet.
          </p>
        </div>

        <div className="testimonials-grid">
          {site.testimonials.map((testimonial) => (
            <article
              className="testimonial-card"
              key={`${testimonial.name}-${testimonial.role}`}
            >
              <div className="testimonial-stars">
                {"★".repeat(testimonial.rating)}
              </div>

              <p>{testimonial.text}</p>

              <div>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}