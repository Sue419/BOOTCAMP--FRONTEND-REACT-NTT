import { FC, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartStateContext, CartDispatchContext } from "@/context/cart/cartContext";
import ModalSuccess from "../modalSuccess/modalSuccess";
import { useModal } from "../../hooks/useModal";
import { Button } from "../shared/button/button";
import { textRegex, numberRegex } from "@/constants/regexValidators";
import useDistricts from "@/hooks/useDistricts";
import { useCartActions } from "@/context/cart/cartAction";
import { AppRoutes } from "@/constants/routes";
import "./Form.css";

interface FormData {
  name: string;
  lastName: string;
  district: string;
  address: string;
  reference: string;
  phone: string;
}

interface FormErrors {
  name: string;
  lastName: string;
  district: string;
  address: string;
  reference: string;
  phone: string;
}

const CheckoutForm: FC = () => {
  const cartState = useContext(CartStateContext);
  const cartDispatch = useContext(CartDispatchContext);
  const { clearCart } = useCartActions();

  const navigate = useNavigate();

  const { isModalVisible, openModal, closeModal } = useModal();
  const { districts} = useDistricts();


  // falta tipar para permitir solo las keys necesarias
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
  });

  // falta tipar para permitir solo las keys necesarias
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    lastName: "",
    district: "",
    address: "",
    reference: "",
    phone: "",
  });

  const validate = () => {
    const newErrors: FormErrors = {
      name: "",
      lastName: "",
      district: "",
      address: "",
      reference: "",
      phone: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!textRegex.test(formData.name)) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.district.trim()) {
      newErrors.district = "District is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.reference.trim()) {
      newErrors.reference = "Reference is required.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    } else if (!numberRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((value) => value === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (validate()) {
      console.log("Order submitted:", formData);
  
      openModal();
  
      if (cartState && cartDispatch) {
        clearCart();
      }
    }
  };
  

  const handleCloseModal = () => {
    closeModal();
    navigate(AppRoutes.Home);
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
          <select
              id="district"
              name="district"
              value={formData.district}
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              className="checkout-form-input"
            >
              <option value="">Select a district</option>
              {districts.map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
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

        <Button type="submit" className="checkout-form-submit">
          Submit
        </Button>
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
