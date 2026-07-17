export default function Contact({ site }) {
  const href = `https://wa.me/${site.company.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage
  )}`;

  return (
    <section className="section contact" id="contato">
      <div className="container contact-box">
        <div>
          <span className="eyebrow">{site.contact.eyebrow}</span>

          <h2>{site.contact.title}</h2>

          <p>{site.contact.text}</p>
        </div>

        <a
          className="button button-light"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {site.contact.buttonLabel}
        </a>
      </div>
    </section>
  );
}