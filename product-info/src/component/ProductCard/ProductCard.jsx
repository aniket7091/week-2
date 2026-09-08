import React from 'react'
import './ProductCard.css'

function ProductCard({product}) {
  return (
    <article className="product-card">

      {/* Product Image */}
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />

        <span className="product-card__badge">
          New
        </span>

        <button
          className="product-card__wishlist"
          aria-label="Add to wishlist"
        >
          ♡
        </button>
      </div>

      {/* Product Details */}
      <div className="product-card__content">

        <div className="product-card__category">
          {product.category}
        </div>

        <h2 className="product-card__title">
          {product.name}
        </h2>

        <p className="product-card__description">
          {product.description}
        </p>

        {/* Rating */}
        <div className="product-card__rating">
          <span className="product-card__stars">
            ★★★★★
          </span>

          <span className="product-card__reviews">
            4.8 · 124 reviews
          </span>
        </div>

        {/* Price */}
        <div className="product-card__price">
          <span className="product-card__current-price">
            {product.price}
          </span>

          <span className="product-card__old-price">
            {product.oldPrice}
          </span>

          <span className="product-card__discount">
            40% OFF
          </span>
        </div>

        {/* Color */}
        <div className="product-card__option">
          <span className="product-card__option-label">
            Color
          </span>

          <div className="product-card__colors">
            <button className="color color--black"></button>
            <button className="color color--white"></button>
            <button className="color color--red"></button>
          </div>
        </div>

        {/* Actions */}
        <div className="product-card__actions">

          <button className="product-card__cart">
            Add to Cart
          </button>

          <button className="product-card__buy">
            Buy Now
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;
