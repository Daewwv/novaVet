import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header({ site }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const branding = site.branding;
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header${scrolled ? " site-header-scrolled" : ""}`}
    >
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          onClick={closeMenu}
          aria-label={`${site.company.name} — início`}
        >
          {branding.logoType === "image" && branding.logo ? (
            <img
              className="brand-logo"
              src={branding.logo}
              alt={`Logo ${site.company.name}`}
            />
          ) : (
            <>
              <span className="brand-mark" aria-hidden="true">
                {branding.logoLetter}
              </span>

              <span className="brand-name">{site.company.name}</span>
            </>
          )}
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="main-navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Navegação principal"
        >
          {site.company.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a
            className="button button-primary header-cta"
            href="#contato"
            onClick={closeMenu}
          >
            {site.hero.primaryCta}
          </a>
        </nav>
      </div>
    </header>
  );
}