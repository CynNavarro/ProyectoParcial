import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import fondoImg from '../assets/img/FONDO_1.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from './ShowcasePortfolio.module.css'
import '../App.css'

const videos = [
  {
    id: 1,
    title: 'Summer Tenshi Showcase',
    src: 'https://www.youtube.com/embed/zOIbaouD6vk',
  },
  {
    id: 2,
    title: 'Summer Tenshi Loading Screen',
    src: 'https://www.youtube.com/embed/8pKtct18Jgo',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 70, damping: 16, delay: i * 0.12 },
  }),
}

function VideoCard({ video, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      className={styles.card}
      variants={cardVariants}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className={styles.videoWrapper}>
        <iframe
          src={video.src}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
          loading="lazy"
        />
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.cardIndex}>
          {String(video.id).padStart(2, '0')}.
        </span>
        <h3 className={styles.cardTitle}>{video.title}</h3>
      </div>
    </motion.article>
  )
}

export default function ShowcasePortfolio() {
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
            <h1 className={styles.bannerTitle}>ShowCase Portfolio</h1>
            <p className={styles.bannerSub}>Live2D Models &mdash; ASummerTenshi</p>
          </div>
        </section>

        {/* ── Grid ──────────────────────────────────────────── */}
        <section className={styles.grid}>
          {videos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </section>

      </main>

      <Footer />
    </div>
  )
}
