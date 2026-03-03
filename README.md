# ProyectoParcial — ASummerTenshi Portfolio

Personal portfolio website for **ASummerTenshi**, a VTuber Artist and Live 2D Rigger. Built as a school project using React and Vite, with a pink pastel aesthetic and smooth animations throughout.

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero section with background image |
| `/about` | About Me — bio and character illustration |
| `/services` | Services — Live 2D rigging, art, emotes and illustration |
| `/portfolio` | Portfolio — gallery of selected works |
| `/terms` | Terms of Service — commission policies |

---

## Tech Stack

- **React 18** with Vite
- **Framer Motion** — page animations, scroll-triggered reveals, spring physics
- **React Router DOM** — client-side routing
- **Lucide React** — icon set
- **CSS Modules** — scoped styles per component and page

---

## Design

- Color palette: pink pastel gradient `#ffd6e0` to `#e8607a`
- Animated gradient on titles and accents
- Dark background `#080406` with subtle rose tint
- Sticky footer layout via flexbox
- Fully responsive — mobile, tablet and desktop

---

## Project Structure

```
src/
  components/
    Navbar.jsx          Hamburger navigation, all screen sizes
    Footer.jsx          Contact links (Email, X, VGen)
  pages/
    HomePage.jsx        Hero with parallax background
    AboutMePage.jsx     Bio with character art background
    ServicesPage.jsx    Five service sections
    PortfolioPage.jsx   7-piece art gallery with hover effects
    TermsPage.jsx       Commission terms and conditions
  assets/
    img/                All images (portfolio, services, backgrounds)
    icons/              Social and tool icons
```

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Links

- Portfolio: [vgen.co/ASummerTenshi](https://vgen.co/ASummerTenshi)
- Twitter / X: [@ASummerTenshi](https://x.com/ASummerTenshi)
