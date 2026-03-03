import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import fondoImg from '../assets/img/FONDO_1.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './PortfolioPage.module.css'
import '../App.css'

// ── Imágenes ─────────────────────────────────────────────────
import img1 from '../assets/img/Portafolio/1_SUMMER_TENSHI_OUTFITS.png'
import img2 from '../assets/img/Portafolio/2_AWA_JELLY_OUTFITSpng.png'
import img3 from '../assets/img/Portafolio/3_STRAWBERRY_ART.png'
import img4 from '../assets/img/Portafolio/4_CRK-OC-STYLE.png'
import img5 from '../assets/img/Portafolio/5_BACKGROUND.png'
import img6 from '../assets/img/Portafolio/6_LOADING_SCREEN.png'
import img7 from '../assets/img/Portafolio/7_CELES_VTUBER.png'

const pieces = [
  { id: 1, title: 'Summer Tenshi Outfits', img: img1, span: 'wide' },
  { id: 2, title: 'Awa Jelly Outfits',     img: img2, span: 'tall' },
  { id: 3, title: 'Strawberry Art',         img: img3, span: 'normal' },
  { id: 4, title: 'CRK OC Style',           img: img4, span: 'normal' },
  { id: 5, title: 'Background',             img: img5, span: 'wide' },
  { id: 6, title: 'Loading Screen',         img: img6, span: 'tall' },
  { id: 7, title: 'Celes Vtuber',           img: img7, span: 'normal' },
]

// ── Variantes ─────────────────────────────────────────────────
const cardVariants = {
  hidden:  { opacity: 0, y: 36, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 70, damping: 16, delay: i * 0.07 },
  }),
}

// ── Card individual ───────────────────────────────────────────
function PortfolioCard({ piece, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      className={`${styles.card} ${styles[piece.span]}`}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className={styles.imgWrapper}>
        <img src={piece.img} alt={piece.title} className={styles.img} loading="lazy" />

        {/* Overlay con gradiente + título */}
        <div className={styles.overlay}>
          <div className={styles.overlayInner}>
            <span className={styles.overlayIndex}>
              {String(piece.id).padStart(2, '0')}
            </span>
            <h3 className={styles.overlayTitle}>{piece.title}</h3>
            <span className={styles.overlayLine} />
          </div>
        </div>
      </div>

      {/* Título visible bajo la imagen */}
      <div className={styles.cardFooter}>
        <span className={styles.cardIndex}>{String(piece.id).padStart(2, '0')}.</span>
        <h3 className={styles.cardTitle}>{piece.title}</h3>
      </div>
    </motion.article>
  )
}

// ── Página ────────────────────────────────────────────────────
export default function PortfolioPage() {
  return (
    <div className="page">
      <Navbar />

      <main className="page-main">

        {/* ── Banner ────────────────────────────────────────── */}
        <section
          className={styles.banner}
          style={{ backgroundImage: `url(${fondoImg})` }}
        >
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>Portfolio</h1>
            <p className={styles.bannerSub}>ASummerTenshi — Selected Works</p>
          </div>
        </section>

        {/* ── Grid ──────────────────────────────────────────── */}
        <section className={styles.grid}>
          {pieces.map((piece, i) => (
            <PortfolioCard key={piece.id} piece={piece} index={i} />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  )
}
