# ◈ AnimanDex

A modern anime database web app built with **Vite + React**, featuring a dark orange glassmorphism UI. Search thousands of anime titles, filter by genre or studio, browse top charts, and save your favorites — all powered by the free [Jikan API](https://jikan.moe).

![AnimanDex](https://img.shields.io/badge/AnimanDex-v1.0.0-ff6b1a?style=flat-square) ![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react) ![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite) ![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

---

## Features

- **Search** — Debounced live search across thousands of anime titles
- **Genre Filter** — Filter by any genre fetched directly from the API
- **Studio Filter** — Filter by studio, extracted from fetched results
- **Sort** — Sort by Top Rated, Most Popular, or Ranking
- **Anime Detail Page** — Full info: synopsis, stats, genres, trailer modal, and recommendations
- **Favorites** — Save anime locally with `localStorage`, persists across sessions
- **Top Anime Page** — Paginated top-rated TV anime of all time
- **Shimmer Skeletons** — Loading placeholders on every grid
- **Fully Responsive** — Mobile, tablet, and desktop layouts

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [React 18](https://react.dev) | UI framework |
| [React Router v6](https://reactrouter.com) | Client-side routing |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Jikan API v4](https://docs.api.jikan.moe/) | Anime data (free, no key needed) |

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm v8+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/rmndzn/animandex.git
cd animandex

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Top navigation bar
│   ├── Hero.jsx          # Homepage hero section
│   ├── SearchBar.jsx     # Debounced search input
│   ├── GenreFilter.jsx   # Genre dropdown
│   ├── StudioFilter.jsx  # Studio dropdown
│   ├── AnimeGrid.jsx     # Responsive card grid
│   ├── AnimeCard.jsx     # Individual anime card
│   ├── Loader.jsx        # Shimmer skeleton cards
│   ├── ErrorMessage.jsx  # Error state UI
│   └── Footer.jsx        # Site footer
├── pages/
│   ├── Home.jsx          # Main search & browse page
│   ├── AnimeDetail.jsx   # Single anime detail page
│   ├── TopAnime.jsx      # Top rated anime list
│   └── Favorites.jsx     # Saved favorites page
├── services/
│   └── api.js            # Jikan API integration
├── styles/
│   └── global.css        # CSS variables & global styles
├── App.jsx               # Routes
└── main.jsx              # Entry point
```

---

## API

This project uses the **[Jikan API v4](https://docs.api.jikan.moe/)** — an unofficial MyAnimeList REST API. It is completely free and requires no API key.

> **Note:** Jikan is rate-limited to ~3 requests/second. If you encounter errors, wait a moment and hit **Try Again**.

---

## Design

- **Theme:** Dark background with orange accent glassmorphism
- **Fonts:** [Outfit](https://fonts.google.com/specimen/Outfit) (display) + [Manrope](https://fonts.google.com/specimen/Manrope) (body)
- **Effects:** `backdrop-filter` blur, ambient orb animations, shimmer skeletons, hover lift cards

---

## License

MIT © 2026 [rmndzn](https://github.com/rmndzn)
