import { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ModalSuccess from "../modalSuccess/modalSuccess";
import { useModal } from "../../hooks/useModal";
import "./Form.css";

const CheckoutForm: FC = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const { isModalVisible, openModal, closeModal } = useModal();

  // falta tipar para permitir solo las keys necesarias
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
  });

  // falta tipar para permitir solo las keys necesarias
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
  });

  const validate = () => {
    // muy complicado de leer esta secci'on
    // los regex deben estar en un archivo aparte para reutilizarlas en otros casos
    const newErrors = {
      name: !formData.name.match(/^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/)
        ? "Please enter a valid name."
        : "",
      lastName: formData.lastName === "" ? "Please enter your last name." : "",
      district:
        formData.district === "" ? "Please enter a valid district." : "",
      address: formData.address === "" ? "Please enter a valid address." : "",
      reference:
        formData.reference === "" ? "Please enter a valid reference." : "",
      phone: !formData.phone.match(/^\d{7,}$/)
        ? "Please enter a valid phone number."
        : "",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((value) => value === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      console.log("Order submitted:", formData);

      openModal();

      // se podr'ia crear una accion para limpiar todo el carrito y no iterar para limpiarlo
      cartContext?.cart.forEach((product) =>
        cartContext.removeFromCart(product.id)
      );
    }
  };

  const handleCloseModal = () => {
    closeModal();
    // usar enum
    navigate("/");
  };

  return (
    <div className="checkout-form">
      <h2>Shipping Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" className="checkout-form-label">
            Name
          </label>
          <input
            type="text"
            className="checkout-form-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="lastName" className="checkout-form-label">
            Last Name
          </label>
          <input
            type="text"
            className="checkout-form-input"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            placeholder="Last Name"
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="district" className="checkout-form-label">
            District
          </label>
          <input
            type="text"
            className="checkout-form-input"
            id="district"
            name="district"
            value={formData.district}
            onChange={(e) =>
              setFormData({ ...formData, district: e.target.value })
            }
            placeholder="District"
          />
          {errors.district && <div className="error">{errors.district}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="address" className="checkout-form-label">
            Address
          </label>
          <input
            type="text"
            className="checkout-form-input"
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="Address"
          />
          {errors.address && <div className="error">{errors.address}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="reference" className="checkout-form-label">
            Reference
          </label>
          <input
            type="text"
            className="checkout-form-input"
            id="reference"
            name="reference"
            value={formData.reference}
            onChange={(e) =>
              setFormData({ ...formData, reference: e.target.value })
            }
            placeholder="Reference"
          />
          {errors.reference && <div className="error">{errors.reference}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="phone" className="checkout-form-label">
            Phone
          </label>
          <input
            type="text"
            className="checkout-form-input"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Phone"
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <button type="submit" className="checkout-form-submit">
          Submit
        </button>
      </form>

      <ModalSuccess
        isOpen={isModalVisible}
        onClose={handleCloseModal}
        title="Order Successful"
      >
        <p>Your order has been successfully!</p>
      </ModalSuccess>
    </div>
  );
};

export default CheckoutForm;
