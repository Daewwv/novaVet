export default function Footer({ site }) {
  const whatsappUrl = `https://wa.me/${site.company.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage
  )}`;

  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <img
            src="/logo/logo-horizontal.png"
            alt={site.company.name}
            className="footer-logo"
          />

          <p>
            {site.company.description}
          </p>

        </div>

        <div>

          <h4>Contato</h4>

          <a href={`mailto:${site.company.email}`}>
            {site.company.email}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <p>
            {site.company.city}
          </p>

        </div>

        <div>

          <h4>Links</h4>

          {site.company.navigation.map((item) => (

            <a
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>

          ))}

        </div>

        <div>

          <h4>Redes</h4>

          <a
            href={site.company.social.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          {site.company.social.facebook && (

            <a
              href={site.company.social.facebook}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

          )}

        </div>

      </div>

      <div className="container footer-bottom">

        <p>

          © {new Date().getFullYear()} {site.company.name}

          {" · "}

          Todos os direitos reservados.

        </p>

      </div>

    </footer>
  );
}