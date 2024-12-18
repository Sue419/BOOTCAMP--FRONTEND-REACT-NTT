import { useCartActions } from "@/context/cart/cartAction"; 
import { calculateDiscountedPrice } from "../../utils/discount";
import style from "./sumaryCart.module.css";

const SummaryCart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useCartActions();
  
  const total = (cart ?? []).reduce(
    (sum, product) =>
      sum +
      calculateDiscountedPrice(product.price, product.discountPercentage) *
        product.quantity,
    0
  );

  return (
    <div className={style["summarycart-container"]}>
      <h1 className={style["summarycart-title"]} role="heading">Shopping Cart Summary</h1>

      <div className={style["summarycart-table-container"]}>
        <table className={style["desktop-table"]}>
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
                    className={style["summarycart-product-image"]}
                  />
                </td>
                <td>{product.title}</td>
                <td>
                  <div className={style["summarycart-item-quantity-desktop"]}>
                    <button
                      className={style["quantity-button"]}
                      onClick={() => decrementQuantity(product.id)}
                      data-testid={`decrement-button-desktop-${product.id}`}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      className={style["quantity-button"]}
                      data-testid={`increment-button-desktop-${product.id}`}
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
                    className={style["remove-button"]}
                    onClick={() => removeFromCart(product.id)}
                    data-testid={`remove-button-desktop-${product.id}`}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={style["mobile-cart"]}>
          {cart.map((product) => (
            <div key={product.id} className={style["summarycart-item"]}>
              <div className={style["summarycart-item-top"]}>
                <div className={style["summarycart-item-image"]}>
                  <img src={product.image[0]} alt={product.title} />
                </div>
                <div className={style["summarycart-item-title"]}>
                  <p>{product.title}</p>
                </div>
                <div className={style["summarycart-item-remove"]}>
                  <button
                    className={style["remove-button"]}
                    onClick={() => removeFromCart(product.id)}
                    data-testid={`remove-button-mobile-${product.id}`}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className={style["summarycart-item-bottom"]}>
                <div className={style["summarycart-item-quantity"]}>
                  <button
                    className={style["quantity-button"]}
                    onClick={() => decrementQuantity(product.id)}
                    data-testid={`decrement-button-mobile-${product.id}`}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    className={style["quantity-button"]}
                    onClick={() => incrementQuantity(product.id)}
                    data-testid={`increment-button-mobile-${product.id}`}
                  >
                    +
                  </button>
                </div>
                <div className={style["summarycart-item-price"]}>
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

      <div className={style["summarycart-total"]}>Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default SummaryCart;
