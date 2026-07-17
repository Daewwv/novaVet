export default function Portfolio({ site }) {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Nossa estrutura</span>

          <h2>
            Conheça os ambientes preparados para cuidar do seu pet.
          </h2>

          <p>
            Estrutura moderna, atendimento humanizado e espaços pensados para
            cães e gatos.
          </p>
        </div>

        <div className="portfolio-grid">
          {site.portfolio.map((project) => (
            <article className="portfolio-card" key={project.title}>
              <img
                src={project.image}
                alt={project.title}
              />

              <div className="portfolio-content">
                <span>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contato">
                  Saiba mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}