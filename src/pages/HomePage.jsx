import fondoImg from '../assets/img/FONDO_1.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../App.css'

export default function HomePage() {
  return (
    <div className="page">
      <Navbar />

      <main className="page-main">
        <section
          className="hero"
          style={{ backgroundImage: `url(${fondoImg})` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">ASummerTenshi</h1>
            <p className="hero-subtitle">VTuber Artist &amp; Live 2D Rigger</p>
          </div>
        </section>

        <div className="app-container">
          {/* Contenido de las secciones aquí */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
