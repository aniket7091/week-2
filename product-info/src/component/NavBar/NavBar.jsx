import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <>
      {/* Promotion Bar */}
      <div className="promotion-bar">
        <p>
          Get 15% OFF on your first order
          <span> — Use code: WELCOME15</span>
        </p>

        <button>
          Shop Now →
        </button>
      </div>

      {/* Navbar */}
      <nav className="navbar">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          NEXORA
        </Link>

        {/* Navigation */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/accessories">Accessories</Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">

          <button aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

          <button aria-label="Account">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6" />
            </svg>
          </button>

          <button className="cart-icon" aria-label="Cart">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            <span>2</span>
          </button>

        </div>

      </nav>
    </>
  );
}

export default NavBar;
