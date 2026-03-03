import { motion } from 'framer-motion'
import fondoImg from '../assets/img/FONDO_1.png'
import pixelImg from '../assets/img/pixel_summer-to-termsOfService.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './TermsPage.module.css'
import '../App.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const sectionVariants = {
  hidden:  { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 16 } },
}

export default function TermsPage() {
  return (
    <div className="page">
      <Navbar />

      <main className="page-main">
        {/* ── Banner ─────────────────────────────────────────── */}
        <section
          className={styles.banner}
          style={{ backgroundImage: `url(${fondoImg})` }}
        >
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>Terms of Service</h1>
            <p className={styles.bannerSub}>ASummerTenshi Commissions</p>
          </div>
        </section>

        {/* ── Contenido ──────────────────────────────────────── */}
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* PAYMENTS */}
          <motion.section className={styles.section} variants={sectionVariants}>
            <h2 className={`${styles.sectionTitle} ${styles.pink1}`}>Payments</h2>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>50/50 Plan</h3>
              <p>When starting the process, half of the payment must be sent. Once it has been accepted and completed, the other half of the payment is sent to release the product.</p>
              <p>No additional commercial fees are required.</p>
            </div>
          </motion.section>

          {/* REVISIONS */}
          <motion.section className={styles.section} variants={sectionVariants}>
            <h2 className={`${styles.sectionTitle} ${styles.pink2}`}>Revisions</h2>
            <ul className={styles.list}>
              <li><span className={styles.highlight}>Sketch Phase:</span> You are able to modify the sketch <strong>5 times</strong>.</li>
              <li><span className={styles.highlight}>Line Phase:</span> You are able to modify <strong>3 times</strong>. If you want to change most pieces of the model (making a complete new design), you will have to pay extra <strong>$10 USD</strong>.</li>
              <li><span className={styles.highlight}>Color Phase:</span> You are able to modify <strong>3 times</strong>. If you want to change most pieces of the model (making a complete new design), you will have to pay extra <strong>$30 USD</strong>.</li>
            </ul>
          </motion.section>

          {/* LIVE 2D */}
          <motion.section className={styles.section} variants={sectionVariants}>
            <h2 className={`${styles.sectionTitle} ${styles.pink3}`}>Live 2D</h2>
            <ul className={styles.list}>
              <li>I will send you updates if you ask. When I finish the rig, I will send you a Showcase of the model.</li>
              <li>You are able to modify the rig <strong>2 times</strong>.</li>
            </ul>
          </motion.section>

          {/* DEADLINES */}
          <motion.section className={styles.section} variants={sectionVariants}>
            <h2 className={`${styles.sectionTitle} ${styles.pink4}`}>Deadlines &amp; Delivery</h2>
            <ul className={styles.list}>
              <li>Vtuber art commission: <span className={styles.highlight}>1–2 months</span></li>
              <li>Illustration commission: <span className={styles.highlight}>1–5 weeks</span></li>
              <li>Rigging commission: <span className={styles.highlight}>1–3 months</span></li>
            </ul>
            <p>I only send the commission once I have received the full payment, then I will send you the files immediately.</p>
          </motion.section>

          {/* INTELLECTUAL PROPERTY */}
          <motion.section className={styles.section} variants={sectionVariants}>
            <h2 className={`${styles.sectionTitle} ${styles.pink5}`}>Intellectual Property Rights</h2>
            <ul className={styles.list}>
              <li>The customer is guaranteed the right to use the model for <strong>personal and commercial purposes</strong>, as well as to create and distribute derivative products.</li>
              <li>The sale of the model is permitted as long as it is <strong>limited to one buyer</strong> and not multiple people. I do not authorize selling it at a higher price.</li>
              <li>I do not allow the client to claim authorship of the art. In other words, the client may not say that they drew, rigged, or animated what they commissioned.</li>
              <li>If the model is not paid for in full upon completion, and after multiple reminders, I reserve the right to sell the commissioned model.</li>
            </ul>
          </motion.section>

          {/* REFUNDS */}
          <motion.section className={styles.section} variants={sectionVariants}>
            <h2 className={`${styles.sectionTitle} ${styles.pink6}`}>Refunds</h2>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Art Commissions</h3>
              <ul className={styles.list}>
                <li>No start / Sketch phase: <span className={styles.refund}>80% refunded</span></li>
                <li>Line phase: <span className={styles.refund}>50% refunded</span></li>
                <li>Color / Upon Completion phase: <span className={styles.refund}>10% refunded</span></li>
              </ul>
            </div>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Live 2D Commissions</h3>
              <ul className={styles.list}>
                <li>No start phase: <span className={styles.refund}>80% refunded</span></li>
                <li>Work in progress phase: <span className={styles.refund}>50% refunded</span></li>
                <li>Completion phase: <span className={styles.refund}>10% refunded</span></li>
              </ul>
            </div>
          </motion.section>

          {/* Imagen */}
          <motion.div className={styles.imageWrapper} variants={sectionVariants}>
            <img src={pixelImg} alt="ASummerTenshi pixel art" className={styles.pixelImg} />
          </motion.div>

        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
