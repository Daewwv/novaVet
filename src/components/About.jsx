export default function About({ site }) {
  return (
    <section className="section" id="sobre">
      <div className="container split about-section">

        <div className="about-content">

          <span className="eyebrow">
            {site.about.eyebrow}
          </span>

          <h2>
            {site.about.title}
          </h2>

          <p>
            {site.about.text}
          </p>

          <div className="about-list">

            {site.about.features.map((feature) => (

              <div
                className="about-feature"
                key={feature}
              >
                ✓ {feature}
              </div>

            ))}

          </div>

        </div>

        <div className="about-image">

          <img
            src="/images/about-team.jpg"
            alt="Equipe Rynova"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}