import { useEffect, useState } from "react";
import { PiPlaceholder } from "react-icons/pi";
import { TbCloudPause } from "react-icons/tb";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

const cartItems = [
  {
    productId: "addsas",
    photo: "https://m.media-amazon.com/images/I/61RJn0ofUsL._SX679_.jpg",
    name: "Macbook",
    price: 790000,
    quantity: 4,
    stock: 10,
  },
  {
    productId: "addsas",
    photo: "ht,tps://m.media-amazon.com/images/I/81CgtwSII3L._SX679_.jpg",
    name: "Macbook",
    price: 790000,
    quantity: 4,
    stock: 10,
  },
  {
    productId: "addsas",
    photo:
      "https://m.media-amazon.com/images/I/414zn58PVUL._SY445_SX342_QL70_FMwebp_.jpg",
    name: "Macbook",
    price: 790000,
    quantity: 4,
    stock: 10,
  },
  {
    productId: "addsas",
    photo: "https://m.media-amazon.com/images/I/81bXhzq2zqL._SX679_.jpg",
    name: "Macbook",
    price: 790000,
    quantity: 4,
    stock: 10,
  },
  {
    productId: "addsas",
    photo: "Apple Mouttps://m.media-amazon.com/images/I/310m50AeVzL._SX6se",
    name: "Macbook",
    price: 790000,
    quantity: 4,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>();
  const [idValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutid = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutid);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Item Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount - <em>${discount}</em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (idValidCouponCode ? (
            <span>
              ${discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
