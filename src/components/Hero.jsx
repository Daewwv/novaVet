export default function Hero({ site }) {
  const hero = site.hero;
  const companyName = site.company?.name || "Rynova";

  return (
    <section
      className="hero"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-background" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">{hero.eyebrow}</span>

          <h1 id="hero-title">{hero.title}</h1>

          <p className="hero-description">{hero.text}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              {hero.primaryCta}
            </a>

            <a className="button button-secondary" href="#portfolio">
              {hero.secondaryCta}
            </a>
          </div>

          <div className="hero-trust" aria-label="Diferenciais da Rynova">
            {hero.trust.map((item) => (
              <div className="hero-trust-item" key={item.title}>
                <span className="hero-icon" aria-hidden="true">
                  {item.icon}
                </span>

                <div>
                  <strong>{item.title}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label={`Apresentação dos projetos da ${companyName}`}
        >
          <div className="hero-glow" aria-hidden="true" />

          <img
            src="/mockups/hero-macbook.png"
            alt={`Projeto digital desenvolvido pela ${companyName} exibido em notebook`}
            className="hero-macbook"
          />

          <img
            src="/mockups/hero-phone.png"
            alt={`Versão responsiva de um projeto da ${companyName} exibida em smartphone`}
            className="hero-phone"
          />

          <img
            src="/mockups/hero-card.png"
            alt="Indicadores de performance, SEO e projetos entregues"
            className="hero-metrics-card"
          />

          <div className="hero-result-badge">
            <span className="hero-result-icon" aria-hidden="true">
              ↗
            </span>

            <div>
              <strong>{hero.badge.title}</strong>
              <span>{hero.badge.subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}