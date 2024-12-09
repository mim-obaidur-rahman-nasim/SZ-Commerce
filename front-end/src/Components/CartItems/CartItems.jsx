// import React, { useState, useContext } from 'react';
// import './CartItems.css';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/cart_cross_icon.png';

// const CartItems = () => {
//   const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

//   const [showModal, setShowModal] = useState(false); // State to control modal visibility
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [transactionId, setTransactionId] = useState('');
//   const [paymentSuccess, setPaymentSuccess] = useState(false); // State to show success message

//   // Function to handle payment
//   const handlePayment = () => {
//     if (phoneNumber && transactionId) {
//       // Simulate payment processing
//       setPaymentSuccess(true);
//       setShowModal(false); // Close the modal after payment
//       setPhoneNumber('');
//       setTransactionId('');
//     } else {
//       alert('Please enter your phone number and transaction ID.');
//     }
//   };

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {all_product.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format cartitems-format-main">
//                 <img src={e.image} alt="" className="carticon-product-icon" />
//                 <p>{e.name}</p>
//                 <p>৳{e.new_price}</p>
//                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                 <p>৳{e.new_price * cartItems[e.id]}</p>
//                 <img
//                   className="cartitems-remove-icon"
//                   src={remove_icon}
//                   onClick={() => removeFromCart(e.id)}
//                   alt=""
//                 />
//               </div>
//               <hr />
//             </div>
//           );
//         }
//         return null;
//       })}

//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>৳{getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Total</p>
//               <p>৳{getTotalCartAmount()}</p>
//             </div>
//           </div>
//           <button onClick={() => setShowModal(true)}>Proceed To Checkout</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cartitems-promobox">
//             <input type="text" placeholder="Promo Code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>

//       {/* Modal for payment */}
//       {showModal && (
//         <div className="payment-modal">
//           <div className="payment-modal-content">
//             <h2>Payment Details</h2>
//             {paymentSuccess ? (
//               <div className="payment-success-message">
//                 <p>Payment complete! Your order is confirmed.</p>
//                 <button onClick={() => setPaymentSuccess(false)}>Close</button>
//               </div>
//             ) : (
//               <div>
//                 <label>Phone Number:</label>
//                 <input
//                   type="text"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   placeholder="Enter your phone number"
//                 />
//                 <label>Transaction ID:</label>
//                 <input
//                   type="text"
//                   value={transactionId}
//                   onChange={(e) => setTransactionId(e.target.value)}
//                   placeholder="Enter your transaction ID"
//                 />
//                 <button onClick={handlePayment}>Pay Now</button>
//                 <button onClick={() => setShowModal(false)}>Cancel</button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItems;


import React, { useState, useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State to show success message

  // Function to handle payment
  const handlePayment = () => {
    if (phoneNumber && transactionId) {
      // Simulate payment processing
      setPaymentSuccess(true);
      setTimeout(() => {
        setShowModal(false); // Close the modal after 3 seconds
      }, 3000); // 3 seconds delay
      setPhoneNumber('');
      setTransactionId('');
    } else {
      alert('Please enter your phone number and transaction ID.');
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>৳{e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>৳{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>৳{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Total</p>
              <p>৳{getTotalCartAmount()}</p>
            </div>
          </div>
          <button onClick={() => setShowModal(true)}>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      {/* Modal for payment */}
      {showModal && (
        <div className="payment-modal">
          <div className="payment-modal-content">
            <h2>Payment Details</h2>
            {paymentSuccess ? (
              <div className="payment-success-message">
                <p>Payment complete! Your order is confirmed.</p>
                <button onClick={() => setPaymentSuccess(false)}>Close</button>
              </div>
            ) : (
              <div>
                <label>Phone Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                />
                <label>Transaction ID:</label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  placeholder="Enter your transaction ID"
                />
                <button onClick={handlePayment}>Pay Now</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
