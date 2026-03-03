import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Twitter, Mail, ExternalLink } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About Me",         href: "/about",      isRoute: true  },
  { label: "Services",         href: "/services",   isRoute: true  },
  { label: "Portfolio",        href: "/portfolio",  isRoute: true  },
  { label: "Terms of Service", href: "/terms",      isRoute: true  },
];

const socialLinks = [
  { icon: Mail,        href: "mailto:summertenshi.comissions@gmail.com", label: "Email"       },
  { icon: Twitter,     href: "https://x.com/ASummerTenshi",             label: "X / Twitter" },
  { icon: ExternalLink,href: "https://vgen.co/ASummerTenshi",           label: "VGen"        },
];

// ── Variantes de animación ──────────────────────────────────
const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
  },
};

const linkVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  animate: { rotate: 180, scale: 1.1 },
  exit:    { rotate: 0,   scale: 1 },
};

// ── Componente ──────────────────────────────────────────────
export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav
        className={styles.nav}
        role="navigation"
        aria-label="Navegación principal"
      >
        {/* ── Logo ── */}
        <Link to="/" className={styles.logo} aria-label="Ir al inicio">
          ASummerTenshi
        </Link>

        {/* ── Botón hamburguesa ── */}
        <button
          className={styles.menuButton}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <X size={24} strokeWidth={1.5} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} strokeWidth={1.5} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* ── Overlay oscuro ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          )}
        </AnimatePresence>

        {/* ── Menú móvil ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
            >
              <ul className={styles.mobileLinks} role="list">
                {navLinks.map(({ label, href, isRoute }, index) => (
                  <motion.li key={label} variants={linkVariants}>
                    {isRoute ? (
                      <Link
                        to={href}
                        className={styles.mobileLinkItem}
                        onClick={handleLinkClick}
                      >
                        <span className={styles.mobileLinkNumber}>
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        {label}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className={styles.mobileLinkItem}
                        onClick={handleLinkClick}
                      >
                        <span className={styles.mobileLinkNumber}>
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        {label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Redes sociales */}
              <motion.div className={styles.mobileSocial} variants={linkVariants}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.socialIcon}
                    aria-label={label}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
