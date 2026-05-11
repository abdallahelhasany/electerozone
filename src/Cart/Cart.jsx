import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import AllComponents from "../Components/AllComponents";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <AllComponents />
        <section
          className="cart-section"
          style={{ padding: "150px 20px", textAlign: "center" }}
        >
          <div className="cart-empty">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ margin: "auto", opacity: 0.5 }}
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h2>Your cart is empty</h2>
            <p>Add some services to get started!</p>
            <Link to="/services" className="cta-button">
              Browse Services
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <AllComponents />
      <section className="cart-section" id="cart">
        <div className="cart-container">
          <div className="cart-header">
            <h2 className="section-title">Shopping Cart</h2>
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>

          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-category">{item.category}</p>
                    <p className="cart-item-description">{item.description}</p>
                    <div className="cart-item-price">
                      ${item.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-item-total">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                      title="Remove item"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>
                    Subtotal (
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                    items)
                  </span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (10%)</span>
                  <span>${(getTotalPrice() * 0.1).toLocaleString()}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${(getTotalPrice() * 1.1).toLocaleString()}</span>
                </div>

                <button className="checkout-btn">Proceed to Checkout</button>

                <Link to="/services" className="continue-shopping">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
