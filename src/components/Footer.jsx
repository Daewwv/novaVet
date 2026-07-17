export default function Footer({ site }) {
  const whatsappUrl = `https://wa.me/${site.company.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage
  )}`;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{site.company.name}</h3>
          <p>{site.company.description}</p>
        </div>

        <div>
          <h4>Contato</h4>

          <a href={`mailto:${site.company.email}`}>
            {site.company.email}
          </a>

          <p>{site.company.address}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div>
          <h4>Horários</h4>

          <p>{site.company.schedule.week}</p>
          <p>{site.company.schedule.saturday}</p>
          <p>{site.company.schedule.sunday}</p>
        </div>

        <div>
          <h4>Redes sociais</h4>

          <a
            href={site.company.social.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href={site.company.social.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {site.company.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}