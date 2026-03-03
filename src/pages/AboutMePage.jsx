import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImg from '../assets/img/AboutMe/ABOUT_ME.png'
import styles from './AboutMePage.module.css'
import '../App.css'

const textVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 55, damping: 18 },
  },
}

const imgVariants = {
  hidden:  { opacity: 0, x: 50, scale: 0.96 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 18, delay: 0.18 },
  },
}

export default function AboutMePage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div className="page">
      <Navbar />

      <main className="page-main">

        {/* ── Banner ─────────────────────────────────────────── */}
        <section className={styles.banner}>
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>About Me</h1>
            <p className={styles.bannerSub}>VTuber Artist &amp; Live 2D Rigger</p>
          </div>
        </section>

        {/* ── Contenido principal ────────────────────────────── */}
        <section className={styles.content} ref={ref}>

          {/* Imagen centrada con el contenido */}
          <img
            src={aboutImg}
            alt=""
            aria-hidden="true"
            className={styles.pageBg}
          />
          <motion.div
            className={styles.textBlock}
            variants={textVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h2 className={styles.name}>Summer Tenshi</h2>

            {/* Párrafos */}
            <div className={styles.parasWrapper}>
              <p className={styles.para}>
                I'm Summer Tenshi, a formally trained Animation student specializing in VTuber
                creation and digital character development. My main focus is character design,
                with a strong emphasis on fashion, clothing design, and visual identity.
              </p>
              <p className={styles.para}>
                I work with anime-style illustration and 2D rigging, combining technical precision
                with artistic sensitivity to create expressive, functional, and visually cohesive
                characters. I'm particularly interested in designing models that feel alive and
                communicate personality through both design and movement.
              </p>
              <p className={styles.para}>
                I'm constantly improving my skills and expanding my knowledge within the fields
                of animation, digital art, and character creation.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
