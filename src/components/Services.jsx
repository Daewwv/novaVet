export default function Services({ site }) {
  return (
    <section className="section section-soft" id="servicos">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Nossos serviços</span>
          <h2>Cuidado completo para a saúde e o bem-estar do seu pet.</h2>
          <p>
            Atendimento veterinário em todas as etapas, da prevenção ao
            acompanhamento clínico e cirúrgico.
          </p>
        </div>

        <div className="cards">
          {site.services.map((service) => (
            <article className="card service-card" key={service.title}>
              <div className="card-icon" aria-hidden="true">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <ul className="service-list">
                {service.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a className="service-link" href="#contato">
                Agendar atendimento →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
