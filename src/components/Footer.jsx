import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand col */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-icon">◈</span>
            Animan<span className="footer__logo-accent">Dex</span>
          </Link>
          <p className="footer__tagline">
            Search, explore, and obsess over<br />your next favorite anime.
          </p>
          <a
            href="https://github.com/rmndzn"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__github"
            aria-label="GitHub profile"
          >
            <svg className="footer__github-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            github.com/rmndzn
          </a>
        </div>

        {/* Nav cols */}
        <div className="footer__nav">
          <div className="footer__nav-col">
            <h4 className="footer__nav-heading">Explore</h4>
            <ul className="footer__nav-list">
              <li><Link to="/" className="footer__nav-link">Home</Link></li>
              <li><Link to="/top" className="footer__nav-link">Top Anime</Link></li>
              <li><Link to="/favorites" className="footer__nav-link">Favorites</Link></li>
            </ul>
          </div>
          <div className="footer__nav-col">
            <h4 className="footer__nav-heading">Data</h4>
            <ul className="footer__nav-list">
              <li>
                <a
                  href="https://jikan.moe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__nav-link"
                >
                  Jikan API
                </a>
              </li>
              <li>
                <a
                  href="https://myanimelist.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__nav-link"
                >
                  MyAnimeList
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copy">
            © 2026 AnimanDex — Made by{' '}
            <a
              href="https://github.com/rmndzn"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__copy-link"
            >
              rmndzn
            </a>
            . All rights reserved.
          </p>
          <p className="footer__disclaimer">
            Powered by{' '}
            <a
              href="https://jikan.moe"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__copy-link"
            >
              Jikan API
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
