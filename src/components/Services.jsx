export default function Services({ site }) {
  return (
    <section
      className="section section-soft"
      id="servicos"
    >
      <div className="container">

        <div className="section-heading">

          <span className="eyebrow">
            Nossos serviços
          </span>

          <h2>
            Soluções digitais para empresas modernas.
          </h2>

          <p>
            Desenvolvemos soluções digitais focadas em
            performance, identidade visual e geração de
            resultados para o seu negócio.
          </p>

        </div>

        <div className="cards">

          {site.services.map((service) => (

            <article
              className="card service-card"
              key={service.title}
            >

              <div className="card-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.text}
              </p>

              <ul className="service-list">

                {service.features.map((feature) => (

                  <li key={feature}>
                    ✓ {feature}
                  </li>

                ))}

              </ul>

              <a
                className="service-link"
                href="#contato"
              >
                Solicitar orçamento →
              </a>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}