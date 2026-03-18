import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">◈</span>
          <span className="navbar__logo-text">
            Ani<span className="navbar__logo-accent">Glass</span>
          </span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'navbar__link--active' : ''}`}>
            Home
          </Link>
          <Link to="/top" className={`navbar__link ${location.pathname === '/top' ? 'navbar__link--active' : ''}`}>
            Top Anime
          </Link>
          <Link to="/favorites" className={`navbar__link ${location.pathname === '/favorites' ? 'navbar__link--active' : ''}`}>
            <span className="navbar__link-icon">♥</span> Favorites
          </Link>
        </div>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
