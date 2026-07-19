export default function Portfolio({ site }) {
  return (
    <section className="section" id="portfolio">
      <div className="container">

        <div className="section-heading">
          <span className="eyebrow">
            PORTFÓLIO
          </span>

          <h2>
            Projetos desenvolvidos pela Rynova.
          </h2>

          <p>
            Cada projeto é desenvolvido para gerar resultados reais,
            transmitir confiança e fortalecer a presença digital do cliente.
          </p>
        </div>

        <div className="portfolio-grid">

          {site.portfolio.map((project) => (

            <article
              className="portfolio-card"
              key={project.title}
            >

              <div className="portfolio-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="portfolio-content">

                <span className="portfolio-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {project.technologies && (

                  <div className="portfolio-tags">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="portfolio-tag"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                )}

                <a
                  href={project.href}
                  className="portfolio-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto →
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}