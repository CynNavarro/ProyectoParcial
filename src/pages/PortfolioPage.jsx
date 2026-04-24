import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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
  { id: 1, title: 'Summer Tenshi Outfits', img: img1, span: 'wide',   desc: 'Character outfit sheet with multiple costume variations and accessories.' },
  { id: 2, title: 'Awa Jelly Outfits',     img: img2, span: 'tall',   desc: 'Alternate outfit designs featuring the Awa Jelly theme.' },
  { id: 3, title: 'Strawberry Art',         img: img3, span: 'normal', desc: 'Strawberry-themed illustration with pastel pink accents.' },
  { id: 4, title: 'CRK OC Style',           img: img4, span: 'normal', desc: 'Original character designed in the Cookie Run Kingdom art style.' },
  { id: 5, title: 'Background',             img: img5, span: 'wide',   desc: 'Full background illustration with environmental detail and lighting.' },
  { id: 6, title: 'Loading Screen',         img: img6, span: 'tall',   desc: 'Animated loading screen concept for a VTuber application.' },
  { id: 7, title: 'Celes Vtuber',           img: img7, span: 'normal', desc: 'Complete VTuber character model design and reference sheet.' },
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
function PortfolioCard({ piece, index, onSelect }) {
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
      onClick={() => onSelect(piece)}
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
            <p className={styles.overlayDesc}>{piece.desc}</p>
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
  const [selected, setSelected] = useState(null)

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
            <PortfolioCard key={piece.id} piece={piece} index={i} onSelect={setSelected} />
          ))}
        </section>

      </main>

      <Footer />

      {/* ── Lightbox ──────────────────────────────────────── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className={styles.lightbox}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 80, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.lightboxClose}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={selected.img}
                alt={selected.title}
                className={styles.lightboxImg}
              />
              <div className={styles.lightboxInfo}>
                <h2 className={styles.lightboxTitle}>{selected.title}</h2>
                <p className={styles.lightboxDesc}>{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
