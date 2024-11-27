import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { calculateDiscountedPrice } from "../../utils/discount";
import "./sumaryCart.css";

const SummaryCart = () => {
  // esto debe estar fuera de este componente
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <p>Error: The cart context is unavailable.</p>;
  }

  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    cartContext;

  const total = cart.reduce(
    (sum, product) =>
      sum +
      calculateDiscountedPrice(product.price, product.discountPercentage) *
        product.quantity,
    0
  );

  return (
    <div className="summarycart-container">
      <h1 className="summarycart-title">Shopping Cart Summary</h1>

      <div className="summarycart-table-container">
        {/* Desktop View: Table */}
        <table className="desktop-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image[0]}
                    alt={product.title}
                    className="summarycart-product-image"
                  />
                </td>
                <td>{product.title}</td>
                <td>
                  <div className="summarycart-item-quantity-desktop">
                    <button
                      className="quantity-button"
                      onClick={() => decrementQuantity(product.id)}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      className="quantity-button"
                      onClick={() => incrementQuantity(product.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  $
                  {calculateDiscountedPrice(
                    product.price,
                    product.discountPercentage
                  )}
                </td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile View: Cards */}
        <div className="mobile-cart">
          {cart.map((product) => (
            <div key={product.id} className="summarycart-item">
              <div className="summarycart-item-top">
                <div className="summarycart-item-image">
                  <img src={product.image[0]} alt={product.title} />
                </div>
                <div className="summarycart-item-title">
                  <p>{product.title}</p>
                </div>
                <div className="summarycart-item-remove">
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="summarycart-item-bottom">
                <div className="summarycart-item-quantity">
                  <button
                    className="quantity-button"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    className="quantity-button"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <div className="summarycart-item-price">
                  <span>
                    $
                    {calculateDiscountedPrice(
                      product.price,
                      product.discountPercentage
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="summarycart-total">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default SummaryCart;
