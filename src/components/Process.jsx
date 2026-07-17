export default function Process({ site }) {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Como funciona</span>

          <h2>Do primeiro contato ao acompanhamento do seu pet.</h2>

          <p>
            Um processo simples, seguro e organizado para cuidar da saúde do seu
            animal em cada etapa.
          </p>
        </div>

        <div className="process-grid">
          {site.process.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}