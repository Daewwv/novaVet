export default function CTA({ site }) {
  const href = `https://wa.me/${site.company.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage
  )}`;

  return (
    <section className="section">
      <div className="container cta cta-light">
        <div>
          <span className="eyebrow">{site.cta.eyebrow}</span>

          <h2>{site.cta.title}</h2>

          <p>{site.cta.text}</p>
        </div>

        <a
          className="button button-primary"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {site.cta.buttonLabel}
        </a>
      </div>
    </section>
  );
}