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

## Design

Dark charcoal background, orange accent colors, glassmorphic cards with soft blur and glow effects. Fonts: Outfit + Manrope. Built to feel like a portfolio-quality product, not a demo.

## Data

All anime data is sourced from [Jikan API](https://jikan.moe), an unofficial REST API for [MyAnimeList](https://myanimelist.net). Free, no API key required.

---

© 2026 AnimanDex — Made by [rmndzn](https://github.com/rmndzn). All rights reserved.


## License

MIT © 2026 [rmndzn](https://github.com/rmndzn)
