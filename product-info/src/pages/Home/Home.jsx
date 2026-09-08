import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import ProductCard from "../../component/ProductCard/ProductCard";
import NavBar from "../../component/NavBar/NavBar";

function Home() {

  const products = [
    {
      id: 1,
      name: "Air Max 270",
      category: "Sneakers",
      price: "₹2,999",
      oldPrice: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 2,
      name: "Classic Hoodie",
      category: "Men's Clothing",
      price: "₹1,799",
      oldPrice: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    },

    {
      id: 3,
      name: "Premium Watch",
      category: "Accessories",
      price: "₹3,499",
      oldPrice: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    },

    {
      id: 4,
      name: "Leather Bag",
      category: "Accessories",
      price: "₹2,499",
      oldPrice: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    
  ];


  return (
    <main className="home">
        {/* navBar */}
        <NavBar /> 

      {/* 
          HERO
       */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-eyebrow">
            NEW SEASON · 2026
          </p>

          <h1>
            Define Your
            <br />
            <span>Everyday Style.</span>
          </h1>

          <p className="hero-description">
            Discover thoughtfully designed essentials,
            premium footwear and accessories made
            for your everyday life.
          </p>

          <div className="hero-actions">

            <Link
              to="/shop"
              className="hero-primary-btn"
            >
              Shop Collection
              <span>→</span>
            </Link>

            <Link
              to="/new-arrivals"
              className="hero-secondary-btn"
            >
              New Arrivals
            </Link>

          </div>

          <div className="hero-meta">

            <div>
              <strong>500+</strong>
              <span>Products</span>
            </div>

            <div>
              <strong>4.8/5</strong>
              <span>Customer Rating</span>
            </div>

            <div>
              <strong>Free</strong>
              <span>Shipping</span>
            </div>

          </div>

        </div>


        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="New fashion collection"
          />

          <div className="hero-image-label">
            <span>01</span>
            <p>ESSENTIAL<br />COLLECTION</p>
          </div>

        </div>

      </section>


      {/* 
          CATEGORIES
       */}

      <section className="categories-section">

        <div className="section-heading">

          <div>
            <p className="section-eyebrow">
              SHOP BY CATEGORY
            </p>

            <h2>
              Find your style.
            </h2>
          </div>

          <p>
            Explore our curated collections
            for every occasion.
          </p>

        </div>


        <div className="category-grid">

          <Link
            to="/men"
            className="category-card category-card--large"
          >
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="Men's collection"
            />

            <div className="category-overlay">
              <span>01</span>
              <h3>Men</h3>
              <p>Explore Collection →</p>
            </div>

          </Link>


          <Link
            to="/women"
            className="category-card"
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
              alt="Women's collection"
            />

            <div className="category-overlay">
              <span>02</span>
              <h3>Women</h3>
              <p>Explore Collection →</p>
            </div>

          </Link>


          <Link
            to="/accessories"
            className="category-card"
          >
            <img
              src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561"
              alt="Accessories collection"
            />

            <div className="category-overlay">
              <span>03</span>
              <h3>Accessories</h3>
              <p>Explore Collection →</p>
            </div>

          </Link>

        </div>

      </section>


      {/* 
          PRODUCTS
       */}

      <section className="products-section">

        <div className="section-header">

          <div>

            <p className="section-eyebrow">
              OUR COLLECTION
            </p>

            <h2>
              Featured Products
            </h2>

          </div>

          <Link
            to="/shop"
            className="view-all"
          >
            View All Products →
          </Link>

        </div>


        <div className="product-grid">

          {products.map((product) => (

            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-link"
            >
              <ProductCard
                id={product.id}
                product={product}
              />
            </Link>

          ))}

        </div>

      </section>


      {/* 
          PROMOTION
       */}

      <section className="promo-section">

        <div className="promo-image">

          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
            alt="Season collection"
          />

        </div>

        <div className="promo-content">

          <p className="section-eyebrow">
            LIMITED TIME
          </p>

          <h2>
            Up to 40% off
            <br />
            selected styles.
          </h2>

          <p>
            Refresh your wardrobe with our
            seasonal collection. Limited pieces,
            exclusive prices.
          </p>

          <Link
            to="/sale"
            className="promo-button"
          >
            Shop Sale
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* 
          FEATURES
       */}

      <section className="features-section">

        <div className="feature">

          <div className="feature-icon">
            ✓
          </div>

          <div>
            <h3>Free Shipping</h3>
            <p>
              Free delivery on orders above ₹999
            </p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            ↻
          </div>

          <div>
            <h3>Easy Returns</h3>
            <p>
              Simple 7-day return policy
            </p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            ◇
          </div>

          <div>
            <h3>Secure Payment</h3>
            <p>
              100% secure checkout
            </p>
          </div>

        </div>


        <div className="feature">

          <div className="feature-icon">
            ♡
          </div>

          <div>
            <h3>Premium Quality</h3>
            <p>
              Carefully selected products
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;