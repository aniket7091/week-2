import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductInfo.css";

const products = [
  {
    id: 1,
    name: "Air Max 270",
    category: "Sneakers",
    brand: "Nike",
    price: 2999,
    oldPrice: 4999,
    discount: "40% OFF",
    rating: 4.8,
    reviews: 124,

    description:
      "Lightweight and comfortable sneakers designed for everyday wear. Featuring responsive cushioning and a modern silhouette that keeps you comfortable throughout the day.",

    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    ],

    colors: [
      "#111111",
      "#ffffff",
      "#a94a4a",
    ],

    sizes: [
      "7",
      "8",
      "9",
      "10",
      "11",
    ],
  },

  {
    id: 2,
    name: "Classic Hoodie",
    category: "Men's Clothing",
    brand: "Urban",
    price: 1799,
    oldPrice: 2499,
    discount: "28% OFF",
    rating: 4.7,
    reviews: 89,

    description:
      "A premium everyday hoodie made with soft cotton fabric and a relaxed fit for maximum comfort. Perfect for casual outings and everyday styling.",

    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
    ],

    colors: [
      "#111111",
      "#777777",
      "#d8c7b5",
    ],

    sizes: [
      "S",
      "M",
      "L",
      "XL",
    ],
  },

  {
    id: 3,
    name: "Premium Watch",
    category: "Accessories",
    brand: "Chronos",
    price: 3499,
    oldPrice: 5999,
    discount: "42% OFF",
    rating: 4.9,
    reviews: 156,

    description:
      "A sophisticated timepiece crafted for modern lifestyles. Featuring a timeless design, premium finish and reliable movement for everyday elegance.",

    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0",
    ],

    colors: [
      "#111111",
      "#c5a46d",
      "#d9d9d9",
    ],

    sizes: [
      "38mm",
      "40mm",
      "42mm",
    ],
  },

  {
    id: 4,
    name: "Leather Bag",
    category: "Accessories",
    brand: "Luxe",
    price: 2499,
    oldPrice: 3999,
    discount: "38% OFF",
    rating: 4.6,
    reviews: 97,

    description:
      "Premium leather bag designed with a clean and functional silhouette. Spacious enough for your everyday essentials while maintaining a refined look.",

    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c",
    ],

    colors: [
      "#111111",
      "#6b4423",
      "#c8a27a",
    ],

    sizes: [
      "Small",
      "Medium",
      "Large",
    ],
  },
];

function ProductInfo() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.images[0]
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0]
  );

  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>

        <Link to="/">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <main className="product-info-page">

      {/* Breadcrumb */}

      <div className="breadcrumb">
        <Link to="/">Home</Link>

        <span>/</span>

        <span>{product.category}</span>

        <span>/</span>

        <span>{product.name}</span>
      </div>


      {/* Product */}

      <section className="product-details">

        {/* LEFT - IMAGES */}

        <div className="product-gallery">

          <div className="thumbnail-list">

            {product.images.map((image, index) => (
              <button
                key={image}
                className={`thumbnail ${
                  selectedImage === image
                    ? "thumbnail-active"
                    : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />
              </button>
            ))}

          </div>


          <div className="main-image-wrapper">

            <img
              src={selectedImage}
              alt={product.name}
              className="main-product-image"
            />

            <span className="detail-badge">
              {product.discount}
            </span>

            <button
              className={`detail-wishlist ${
                liked ? "liked" : ""
              }`}
              onClick={() => setLiked(!liked)}
              aria-label="Add to wishlist"
            >
              {liked ? "♥" : "♡"}
            </button>

          </div>

        </div>


        {/* RIGHT - INFORMATION */}

        <div className="product-details-content">

          <p className="detail-category">
            {product.category}
          </p>

          <h1 className="detail-title">
            {product.name}
          </h1>

          <p className="detail-brand">
            by <strong>{product.brand}</strong>
          </p>


          {/* Rating */}

          <div className="detail-rating">

            <div className="stars">
              ★★★★★
            </div>

            <span>
              {product.rating}
            </span>

            <span className="review-link">
              {product.reviews} Reviews
            </span>

          </div>


          <div className="detail-divider" />


          {/* Price */}

          <div className="detail-price">

            <span className="detail-current-price">
              ₹{product.price.toLocaleString()}
            </span>

            <span className="detail-old-price">
              ₹{product.oldPrice.toLocaleString()}
            </span>

            <span className="detail-discount">
              {product.discount}
            </span>

          </div>

          <p className="tax-text">
            Inclusive of all taxes
          </p>


          {/* Description */}

          <p className="detail-description">
            {product.description}
          </p>


          {/* Color */}

          <div className="detail-option">

            <div className="option-heading">
              <span>Color</span>

              <span className="selected-value">
                {selectedColor === "#111111"
                  ? "Black"
                  : selectedColor === "#ffffff"
                  ? "White"
                  : "Red"}
              </span>
            </div>

            <div className="color-list">

              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`detail-color ${
                    selectedColor === color
                      ? "selected-color"
                      : ""
                  }`}
                  style={{
                    backgroundColor: color,
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}

            </div>

          </div>


          {/* Size */}

          <div className="detail-option">

            <div className="option-heading">
              <span>Size</span>

              <button className="size-guide">
                Size Guide
              </button>
            </div>

            <div className="size-list">

              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${
                    selectedSize === size
                      ? "selected-size"
                      : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}

            </div>

          </div>


          {/* Quantity */}

          <div className="quantity-section">

            <span>Quantity</span>

            <div className="quantity-control">

              <button onClick={decreaseQuantity}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={increaseQuantity}>
                +
              </button>

            </div>

          </div>


          {/* Actions */}

          <div className="detail-actions">

            <button className="add-cart">
              Add to Cart
            </button>

            <button className="buy-now">
              Buy Now
            </button>

          </div>


          {/* Benefits */}

          <div className="product-benefits">

            <div className="benefit">

              <span className="benefit-icon">
                ✓
              </span>

              <div>
                <strong>Free Shipping</strong>
                <p>On orders above ₹999</p>
              </div>

            </div>


            <div className="benefit">

              <span className="benefit-icon">
                ↻
              </span>

              <div>
                <strong>Easy Returns</strong>
                <p>7 days return policy</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Description Section */}

      <section className="product-extra">

        <div>
          <p className="extra-label">
            PRODUCT DETAILS
          </p>

          <h2>
            Designed for everyday comfort.
          </h2>
        </div>

        <p>
          Built with comfort, functionality and modern
          aesthetics in mind. This product is designed
          to fit seamlessly into your everyday lifestyle.
        </p>

      </section>

    </main>
  );
}

export default ProductInfo;