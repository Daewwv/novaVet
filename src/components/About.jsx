export default function About({ site }) {
  return (
    <section className="section" id="sobre">
      <div className="container split">

        <div>

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
              <div key={feature}>
                ✓ {feature}
              </div>
            ))}

          </div>

        </div>

        <div className="about-image">

          <img
            src={site.about.image}
            alt={site.about.title}
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}