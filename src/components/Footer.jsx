import { Link } from "react-router-dom";
import { Mail, Twitter, ExternalLink, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo-oficial.png";
import styles from "./Footer.module.css";

const contacts = [
  {
    icon: Mail,
    label: "Comissions Email",
    href: "mailto:summertenshi.comissions@gmail.com",
    display: "summertenshi.comissions@gmail.com",
  },
  {
    icon: Twitter,
    label: "X / Twitter DMs",
    href: "https://x.com/ASummerTenshi",
    display: "@ASummerTenshi",
  },
  {
    icon: ExternalLink,
    label: "VGen",
    href: "https://vgen.co/ASummerTenshi",
    display: "vgen.co/ASummerTenshi",
  },
];

const siteLinks = [
  { label: "About Me",         href: "/about"     },
  { label: "Services",         href: "/services"  },
  { label: "Portfolio",        href: "/portfolio" },
  { label: "ShowCase",         href: "/showcase"  },
  { label: "Terms of Service", href: "/terms"     },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Link to="/" className={styles.brand} aria-label="ASummerTenshi, go to homepage">
          <img src={logoImg} alt="" className={styles.brandImg} height="46" />
          <span className={styles.brandName}>ASummerTenshi</span>
        </Link>

        <nav aria-label="Footer navigation" className={styles.siteNav}>
          <ul className={styles.siteLinks} role="list">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className={styles.siteLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn--ghost btn--sm">
          Start a commission
          <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.inner}>
        <p className={styles.label}>Communication</p>

        <ul className={styles.list} role="list">
          {contacts.map(({ icon: Icon, label, href, display }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.link}
                target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={15} strokeWidth={1.75} className={styles.icon} />
                <span>{display}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className={styles.copy}>
          © {new Date().getFullYear()} ASummerTenshi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
