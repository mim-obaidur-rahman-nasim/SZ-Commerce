import React from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const [selectedSize, setSelectedSize] = React.useState('');
  const { product } = props;
  const { addToCart } = React.useContext(ShopContext);
  const productSizeArray = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update the selected size
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">৳{product.old_price}</div>
          <div className="productdisplay-right-price-new">৳{product.new_price}</div>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {productSizeArray.map((size) => (
              <div
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`productdisplay-size ${selectedSize === size ? 'selected-size' : ''}`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button 
  onClick={() => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart!");
      return;
    }
    addToCart(product.id, selectedSize);
  }}
>
  Add to cart
</button>

      </div>
    </div>
  );
};

export default ProductDisplay;
