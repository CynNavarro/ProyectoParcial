/* ASummerTenshi — HomePage
 * Redesign-preserve: mismo patrón (negro cálido + rosa pastel), nuevo contenido
 * con CTA y secciones proyectadas (requisito Entregable 2).
 */
import { Link } from 'react-router-dom'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, PenTool, Box, Heart } from 'lucide-react'
import fondoImg from '../assets/img/FONDO_1.webp'
import imgRigging from '../assets/img/SERVICES-seccion1-LIVE2DRIGGING+ART.webp'
import imgEmotes from '../assets/img/SERVICES-seccion4-EMOTES.webp'
import imgIllust from '../assets/img/SERVICES-seccion5-ILLUSTRATION.webp'
import workOutfits from '../assets/img/Portafolio/1_SUMMER_TENSHI_OUTFITS.webp'
import workStrawberry from '../assets/img/Portafolio/3_STRAWBERRY_ART.webp'
import workBackground from '../assets/img/Portafolio/5_BACKGROUND.webp'
import workCeles from '../assets/img/Portafolio/7_CELES_VTUBER.webp'
import workLoading from '../assets/img/Portafolio/6_LOADING_SCREEN.webp'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'
import styles from './HomePage.module.css'

/* ── Variantes ─────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 16, delay: i * 0.08 },
  }),
}

function Reveal({ children, className, index = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate={inView || reduce ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  )
}

const featuredServices = [
  {
    icon: Box,
    title: 'Live 2D Rigging + Art',
    desc: 'Full package: your character designed, illustrated and rigged into an expressive Live 2D model.',
    img: imgRigging,
  },
  {
    icon: PenTool,
    title: 'Vtuber Art',
    desc: 'Model-ready artwork prepared for rigging, with clean layers and expressive faces.',
    img: imgEmotes,
  },
  {
    icon: Heart,
    title: 'Illustration',
    desc: 'Anime-style commissions: bust, half body or full body, with add-ons to fit your idea.',
    img: imgIllust,
  },
]

const previewWorks = [
  { img: workOutfits, title: 'Summer Tenshi Outfits', span: 'wide' },
  { img: workStrawberry, title: 'Strawberry Art', span: 'tall' },
  { img: workBackground, title: 'Background', span: 'wide' },
  { img: workCeles, title: 'Celes Vtuber', span: 'normal' },
]

/* ── Página ────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="page">
      <Navbar />

      <main className="page-main" id="main-content">
        {/* ── Hero ── */}
        <section
          className={styles.hero}
          style={{ backgroundImage: `url(${fondoImg})` }}
          aria-label="ASummerTenshi, VTuber Artist and Live 2D Rigger"
        >
          <div className={styles.heroOverlay} />
          <div className={styles.heroGlowPink} aria-hidden="true" />
          <div className={styles.heroGlowBlue} aria-hidden="true" />
          <div className={styles.heroContent}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 0.25 }}
            >
              ASummerTenshi
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              VTuber Artist &amp; Live 2D Rigger
            </motion.p>
          </div>
          <div className={styles.heroFade} aria-hidden="true" />
        </section>

        {/* ── Intro / propuesta de valor ── */}
        <section className={styles.intro}>
          <Reveal className={styles.introInner}>
            <p className={styles.introKicker}>What I do</p>
            <h2 className={styles.introTitle}>
              I design and illustrate VTuber characters with their own identity,
              and I take the process all the way to an expressive Live 2D model.
            </h2>
            <p className={styles.introText}>
              One brand for character design, model art and rigging, so your
              idea keeps its style from the first sketch to the final movement.
            </p>
            <Link to="/about" className={styles.textLink}>
              More about me
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </section>

        {/* ── Servicios destacados ── */}
        <section className={styles.section} aria-labelledby="home-services">
          <Reveal className={styles.sectionHead}>
            <p className={styles.introKicker}>Services</p>
            <h2 id="home-services" className={styles.sectionTitle}>What I can make for you</h2>
          </Reveal>
          <div className={styles.serviceGrid}>
            {featuredServices.map((s, i) => (
              <Reveal key={s.title} index={i} className={styles.serviceCard}>
                <div className={styles.serviceImgWrap}>
                  <img src={s.img} alt={`${s.title} example artwork`} className={styles.serviceImg} loading="lazy" />
                  <span className={styles.serviceIcon} aria-hidden="true">
                    <s.icon size={20} strokeWidth={1.75} />
                  </span>
                </div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <Link to="/services" className={styles.textLink}>
                    See details
                    <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Preview portafolio ── */}
        <section className={styles.section} aria-labelledby="home-works">
          <Reveal className={styles.sectionHead}>
            <p className={styles.introKicker}>Portfolio</p>
            <h2 id="home-works" className={styles.sectionTitle}>Selected works</h2>
          </Reveal>
          <div className={styles.workGrid}>
            {previewWorks.map((w, i) => (
              <Reveal key={w.title} index={i} className={`${styles.workItem} ${styles[w.span]}`}>
                <img src={w.img} alt={w.title} className={styles.workImg} loading="lazy" />
                <div className={styles.workOverlay}>
                  <span className={styles.workTitle}>{w.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className={styles.centerCta}>
            <Link to="/portfolio" className="btn btn--primary">
              View full portfolio
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </section>

        {/* ── Teaser showcase ── */}
        <section className={styles.showcaseTeaser}>
          <Reveal className={styles.showcaseInner}>
            <div className={styles.showcaseText}>
              <p className={styles.introKicker}>
                ShowCase Portfolio
              </p>
              <h2 className={styles.sectionTitle}>See the models move</h2>
              <p className={styles.showcaseDesc}>
                Rigging comes alive on screen. Watch the showcases to see how
                the expressions, head angles and physics feel in motion.
              </p>
              <Link to="/showcase" className="btn btn--ghost">
                Watch showcases
                <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
            <Link to="/showcase" className={styles.showcaseThumb} aria-label="Go to the showcase page">
              <img
                src={workLoading}
                alt="Loading screen animation preview"
                className={styles.showcaseImg}
                loading="lazy"
              />
              <span className={styles.playBadge} aria-hidden="true">▶</span>
            </Link>
          </Reveal>
        </section>

        {/* ── CTA contacto ── */}
        <section className={styles.ctaBand}>
          <Reveal className={styles.ctaInner}>
            <p className={styles.ctaText}>
              Ready to bring your character to life? Tell me about your idea and
              I will guide you through art, rigging and delivery.
            </p>
            <Link to="/contact" className="btn btn--accent">
              Start a commission
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
