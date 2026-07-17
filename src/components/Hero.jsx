export default function Hero({ site }) {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">

        <div className="hero-content">

          <span className="eyebrow">
            {site.hero.eyebrow}
          </span>

          <h1>{site.hero.title}</h1>

          <p>{site.hero.text}</p>

          <div className="hero-actions">

            <a className="button button-primary" href="#contato">
              {site.hero.primaryCta}
            </a>

            <a className="button button-secondary" href="#servicos">
              {site.hero.secondaryCta}
            </a>

          </div>

          <div className="hero-trust">
            {site.hero.trust.map((item) => (
              <div className="hero-trust-item" key={item.title}>
                <span>{item.icon}</span>
                <strong>{item.title}</strong>
              </div>
            ))}
          </div>

        </div>

        <div className="hero-image-wrap">

          <img
            src={site.hero.image}
            alt={site.company.name}
          />

          <div className="hero-floating-card">

            <strong>
              {site.hero.badge.title}
            </strong>

            <span>
              {site.hero.badge.subtitle}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}