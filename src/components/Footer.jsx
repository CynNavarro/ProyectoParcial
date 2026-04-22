import { Mail, Twitter, ExternalLink, MessageCircle, Phone } from "lucide-react";
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
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/5215511450030",
    display: "WhatsApp",
  },
  {
    icon: Phone,
    label: "Llamada Telefónica",
    href: "tel:+5215511450030",
    display: "Llamar ahora", 
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.label}>Communication</p>

        <ul className={styles.list} role="list">
          {contacts.map(({ icon: Icon, label, href, display }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.link}
                target={href.startsWith("mailto") ? undefined : "_blank"}
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
