export default function FloatingWhatsApp({ site }) {
  const href = `https://wa.me/${site.company.whatsapp}?text=${encodeURIComponent(
    site.contact.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label={`Falar com ${site.company.name} pelo WhatsApp`}
      title="Falar no WhatsApp"
    >
      💬
    </a>
  );
}