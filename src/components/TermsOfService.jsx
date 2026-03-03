import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import pixelImg from "../assets/img/pixel_summer-to-termsOfService.png";
import styles from "./TermsOfService.module.css";

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.25 } },
};

const panelVariants = {
  hidden:  { y: "6%", opacity: 0, scale: 0.97 },
  visible: {
    y: 0, opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 18, delay: 0.05 },
  },
  exit: {
    y: "6%", opacity: 0, scale: 0.97,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

export default function TermsOfService({ isOpen, onClose }) {
  // Esc para cerrar
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          role="presentation"
        >
          <motion.article
            className={styles.panel}
            variants={panelVariants}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Terms of Service"
          >
            {/* Header */}
            <div className={styles.panelHeader}>
              <h2 className={styles.title}>Terms of Service</h2>
              <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cuerpo scrollable */}
            <div className={styles.body}>

              {/* ── PAYMENTS ──────────────────────────────── */}
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Payments</h3>
                <div className={styles.block}>
                  <h4 className={styles.blockTitle}>50/50 Plan</h4>
                  <p>When starting the process, half of the payment must be sent. Once it has been accepted and completed, the other half of the payment is sent to release the product.</p>
                  <p>No additional commercial fees are required.</p>
                </div>
              </section>

              {/* ── REVISIONS ─────────────────────────────── */}
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Revisions</h3>
                <ul className={styles.list}>
                  <li><span className={styles.highlight}>Sketch Phase:</span> You are able to modify the sketch <strong>5 times</strong>.</li>
                  <li><span className={styles.highlight}>Line Phase:</span> You are able to modify <strong>3 times</strong>. If you want to change most pieces of the model (making a complete new design), you will have to pay extra <strong>$10 USD</strong>.</li>
                  <li><span className={styles.highlight}>Color Phase:</span> You are able to modify <strong>3 times</strong>. If you want to change most pieces of the model (making a complete new design), you will have to pay extra <strong>$30 USD</strong>.</li>
                </ul>
              </section>

              {/* ── LIVE 2D ───────────────────────────────── */}
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Live 2D</h3>
                <ul className={styles.list}>
                  <li>I will send you updates if you ask. When I finish the rig, I will send you a Showcase of the model.</li>
                  <li>You are able to modify the rig <strong>2 times</strong>.</li>
                </ul>
              </section>

              {/* ── DEADLINES ─────────────────────────────── */}
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Deadlines & Delivery</h3>
                <ul className={styles.list}>
                  <li>Vtuber art commission: <span className={styles.highlight}>1–2 months</span></li>
                  <li>Illustration commission: <span className={styles.highlight}>1–5 weeks</span></li>
                  <li>Rigging commission: <span className={styles.highlight}>1–3 months</span></li>
                </ul>
                <p>I only send the commission once I have received the full payment, then I will send you the files immediately.</p>
              </section>

              {/* ── INTELLECTUAL PROPERTY ─────────────────── */}
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Intellectual Property Rights</h3>
                <ul className={styles.list}>
                  <li>The customer is guaranteed the right to use the model for <strong>personal and commercial purposes</strong>, as well as to create and distribute derivative products.</li>
                  <li>The sale of the model is permitted as long as it is <strong>limited to one buyer</strong> and not multiple people. I do not authorize selling it at a higher price.</li>
                  <li>I do not allow the client to claim authorship of the art. In other words, the client may not say that they drew, rigged, or animated what they commissioned.</li>
                  <li>If the model is not paid for in full upon completion, and after multiple reminders, I reserve the right to sell the commissioned model.</li>
                </ul>
              </section>

              {/* ── REFUNDS ───────────────────────────────── */}
              <section className={styles.section}>
                <h3 className={styles.sectionTitle}>Refunds</h3>

                <div className={styles.block}>
                  <h4 className={styles.blockTitle}>Art Commissions</h4>
                  <ul className={styles.list}>
                    <li>No start / Sketch phase: <span className={styles.refund}>80% refunded</span></li>
                    <li>Line phase: <span className={styles.refund}>50% refunded</span></li>
                    <li>Color / Upon Completion phase: <span className={styles.refund}>10% refunded</span></li>
                  </ul>
                </div>

                <div className={styles.block}>
                  <h4 className={styles.blockTitle}>Live 2D Commissions</h4>
                  <ul className={styles.list}>
                    <li>No start phase: <span className={styles.refund}>80% refunded</span></li>
                    <li>Work in progress phase: <span className={styles.refund}>50% refunded</span></li>
                    <li>Completion phase: <span className={styles.refund}>10% refunded</span></li>
                  </ul>
                </div>
              </section>

              {/* ── Imagen final ──────────────────────────── */}
              <div className={styles.imageWrapper}>
                <img
                  src={pixelImg}
                  alt="ASummerTenshi pixel art"
                  className={styles.pixelImg}
                />
              </div>

            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
