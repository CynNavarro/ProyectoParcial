/* ASummerTenshi — ContactPage
 * Página de contacto (ruta /contact): formulario que prepara un correo
 * con los datos de la solicitud + tarjetas de canales directos.
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Twitter, ExternalLink, Send, Clock,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import fondoImg from '../assets/img/FONDO_1.webp'
import '../App.css'
import styles from './ContactPage.module.css'

const EMAIL = 'summertenshi.comissions@gmail.com'

const channels = [
  {
    icon: Mail,
    label: 'Commissions Email',
    display: EMAIL,
    href: `mailto:${EMAIL}`,
    note: 'Best for detailed requests',
  },
  {
    icon: Twitter,
    label: 'X / Twitter DMs',
    display: '@ASummerTenshi',
    href: 'https://x.com/ASummerTenshi',
    note: 'Fastest casual contact',
  },
  {
    icon: ExternalLink,
    label: 'VGen',
    display: 'vgen.co/ASummerTenshi',
    href: 'https://vgen.co/ASummerTenshi',
    note: 'Commission platform profile',
  },
]

const serviceTypes = [
  'Live 2D Rigging + Art',
  'Vtuber Art',
  'Rigging Services',
  'Emotes',
  'Illustration',
  'Other',
]

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 70, damping: 16, delay: i * 0.06 },
  }),
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', type: serviceTypes[0], message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  // Construye un correo prellenado; sin backend, sin datos almacenados en el sitio.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Commission request — ${form.type} (${form.name})`)
    const body = encodeURIComponent(
      `Hi Summer Tenshi!\n\n` +
      `My name is: ${form.name}\n` +
      `My email is: ${form.email}\n` +
      `Service type: ${form.type}\n\n` +
      `Project details:\n${form.message}\n\n` +
      `Sent from asummertenshi.studio/contact`
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <div className="page">
      <Navbar />

      <main className="page-main" id="main-content">
        {/* ── Banner ── */}
        <section
          className={styles.banner}
          style={{ backgroundImage: `url(${fondoImg})` }}
          aria-label="Contact"
        >
          <div className={styles.bannerOverlay} />
          <div className={styles.bannerContent}>
            <motion.h1
              className={styles.bannerTitle}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 60, damping: 16 }}
            >
              Contact
            </motion.h1>
            <motion.p
              className={styles.bannerSub}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tell me about your character and let us start your commission
            </motion.p>
          </div>
        </section>

        <div className={styles.layout}>
          {/* ── Formulario ── */}
          <motion.section
            className={styles.formColumn}
            initial="hidden"
            animate="visible"
            aria-labelledby="contact-form-title"
          >
            <motion.div variants={itemVariants} custom={0} className={styles.formCard}>
              <h2 id="contact-form-title" className={styles.formTitle}>Start your request</h2>
              <p className={styles.formHint}>
                Fill this form and your email app will open with everything ready to send.
                You can also write directly to any channel on the side.
              </p>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <label htmlFor="cf-name" className={styles.label}>Your name</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-email" className={styles.label}>Your email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-type" className={styles.label}>Service type</label>
                  <select
                    id="cf-type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className={styles.input}
                  >
                    {serviceTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="cf-message" className={styles.label}>Project details</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Describe your character idea, references, deadline..."
                    value={form.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </div>

                <button type="submit" className="btn btn--accent btn--block">
                  <Send size={17} strokeWidth={2} aria-hidden="true" />
                  Send via email
                </button>
              </form>
            </motion.div>
          </motion.section>

          {/* ── Canales ── */}
          <motion.aside
            className={styles.channelsColumn}
            initial="hidden"
            animate="visible"
            aria-labelledby="channels-title"
          >
            <motion.h2 variants={itemVariants} custom={0} id="channels-title" className={styles.channelsTitle}>
              Direct channels
            </motion.h2>
            <motion.p variants={itemVariants} custom={1} className={styles.channelsHint}>
              Prefer something quicker? Reach me here:
            </motion.p>

            <ul className={styles.channelList} role="list">
              {channels.map((c, i) => (
                <motion.li key={c.label} variants={itemVariants} custom={i + 2}>
                  <a
                    href={c.href}
                    className={styles.channelCard}
                    target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                  >
                    <span className={styles.channelIcon} aria-hidden="true">
                      <c.icon size={21} strokeWidth={1.75} />
                    </span>
                    <span className={styles.channelLabel}>{c.label}</span>
                    <span className={styles.channelDisplay}>{c.display}</span>
                    <span className={styles.channelNote}>{c.note}</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div variants={itemVariants} custom={7} className={styles.noteCard}>
              <Clock size={18} strokeWidth={1.75} aria-hidden="true" />
              <p>
                Before writing, check the Terms of Service page: payment split,
                revision limits and delivery times are explained there.
              </p>
              <a href="/terms" className={styles.noteLink}>Read the terms</a>
            </motion.div>
          </motion.aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
