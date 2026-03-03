import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import fondoImg   from '../assets/img/FONDO_1.png'
import imgRigging from '../assets/img/SERVICES-seccion1-LIVE2DRIGGING+ART.png'
import imgEmotes  from '../assets/img/SERVICES-seccion4-EMOTES.png'
import imgIllust  from '../assets/img/SERVICES-seccion5-ILLUSTRATION.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './ServicesPage.module.css'
import '../App.css'

// ── Animaciones ─────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden:  { y: 28, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 75, damping: 16 } },
}

// ── Componente animado que se activa al entrar en viewport ───
function AnimatedSection({ children, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.section
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.section>
  )
}

// ── Sub-componente de bloque (Includes / Details / Add-ons / Important) ──
function DescBlock({ title, items, accentClass }) {
  return (
    <motion.div className={styles.descBlock} variants={itemVariants}>
      <h4 className={`${styles.descBlockTitle} ${accentClass}`}>{title}</h4>
      <ul className={styles.descList}>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

// ── Datos de servicios ───────────────────────────────────────
const services = [
  {
    id: 'live2d',
    title: 'Live 2D Rigging + Art',
    image: imgRigging,
    description: null,
    pinkClass: 'pink1',
  },
  {
    id: 'vtuber-art',
    title: 'Vtuber Art',
    image: null,
    pinkClass: 'pink2',
    description: {
      includes: [
        'A PSD ready to rig',
        '5 free expressions',
        'High quality PNG for social media, edits, etc.',
      ],
      details: [
        'Character design is included — but if you already have a character, I can take it.',
        'Compatibility: Live 2D Model.',
      ],
      addons: [
        'Extra expressions + $1 USD each',
        'Extra full costume + $30 USD',
        'Extra hand toggle + $2 USD each',
      ],
      important: [
        "Can't draw furry.",
        'NSFW only by personal request.',
      ],
    },
  },
  {
    id: 'rigging',
    title: 'Rigging Services',
    image: null,
    pinkClass: 'pink3',
    description: {
      includes: [
        '.moc file ready to use in VTuber Studio',
        'VTuber texture',
        'VTuber animations and expression file',
        '5 free expressions',
        'VBridger parameters',
      ],
      details: [
        'Character design is included — but if you already have a character, I can take it.',
        'Compatibility: Live 2D Model.',
      ],
      addons: [
        'Extra expressions + $1 USD each',
        'Extra full costume + $65 USD',
        'Extra hand toggle + $4 USD each',
        'Cut PSD file + $35 USD',
      ],
      important: [
        "Can't draw furry.",
        'NSFW only by personal request.',
      ],
    },
  },
  {
    id: 'emotes',
    title: 'Emotes',
    image: imgEmotes,
    pinkClass: 'pink4',
    description: {
      includes: [
        'A 6-pack PSD file with all the emotes',
        'High quality PNG and JPEG for social media, edits, etc.',
      ],
      details: [
        'Pack of 6 customisable emotes',
      ],
      addons: [
        'Animated emote + $5 USD each',
      ],
      important: [
        "Can't draw furry.",
        'NSFW only by personal request.',
      ],
    },
  },
  {
    id: 'illustration',
    title: 'Illustration',
    image: imgIllust,
    pinkClass: 'pink5',
    description: {
      includes: [
        'A PSD file with the illustration',
        'High quality PNG and JPEG for social media, edits, etc.',
        'If it is a PNGtuber, several PNGs and expressions are included within the file.',
      ],
      details: [
        'Bust: $15 USD',
        'Half-body: $25 USD',
        'Full-body: $30 USD',
        'Simple Background: No cost',
        'Mid Detailed Background: No cost',
        'Complex Detailed Background: +$10 USD',
      ],
      addons: [
        'Extra character + half price of the original USD each',
        'PNGtuber + $6 USD',
        'Animation + $60 USD',
      ],
      important: [
        "Can't draw furry.",
        'NSFW only by personal request.',
      ],
    },
  },
]

// ── Componente principal ─────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="page">
      <Navbar />

      <main className="page-main">

        {/* ── Banner ───────────────────────────────────────── */}
        <section
          className={styles.banner}
          style={{ backgroundImage: `url(${fondoImg})` }}
        >
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>Services</h1>
            <p className={styles.bannerSub}>ASummerTenshi Commissions</p>
          </div>
        </section>

        {/* ── Listado de servicios ─────────────────────────── */}
        <div className={styles.servicesList}>
          {services.map((service, idx) => (
            <AnimatedSection
              key={service.id}
              className={`${styles.serviceCard} ${idx % 2 !== 0 ? styles.serviceCardAlt : ''}`}
            >
              {/* Título */}
              <motion.h2
                className={`${styles.serviceTitle} ${styles[service.pinkClass]}`}
                variants={itemVariants}
              >
                {service.title}
              </motion.h2>

              {/* Imagen (si tiene) */}
              {service.image && (
                <motion.div className={styles.imageWrapper} variants={itemVariants}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className={styles.serviceImg}
                  />
                </motion.div>
              )}

              {/* Descripción (si tiene) */}
              {service.description && (
                <motion.div className={styles.descWrapper} variants={itemVariants}>
                  <DescBlock
                    title="Includes"
                    items={service.description.includes}
                    accentClass={styles.blockAccent1}
                  />
                  <DescBlock
                    title="Details"
                    items={service.description.details}
                    accentClass={styles.blockAccent2}
                  />
                  <DescBlock
                    title="Add-ons"
                    items={service.description.addons}
                    accentClass={styles.blockAccent3}
                  />
                  <DescBlock
                    title="Important"
                    items={service.description.important}
                    accentClass={styles.blockAccentWarn}
                  />
                </motion.div>
              )}
            </AnimatedSection>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}
