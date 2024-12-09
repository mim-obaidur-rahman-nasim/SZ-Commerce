import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);


  const [rating, setRating] = useState(product.rating || 0); 
  const [selectedSize, setSelectedSize] = useState(''); 


  const handleRatingClick = (starIndex) => {
    setRating(starIndex + 1); 
  };


  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };


  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, rating, selectedSize });
    } else {
      alert('Please select a size');
    }
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
        <div className="productdisplay-right-stars">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < rating ? star_icon : star_dull_icon}
              alt=""
              onClick={() => handleRatingClick(index)}
              className="star"
            />
          ))}
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">৳{product.old_price}</div>
          <div className="productdisplay-right-price-new">৳{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          <p>{product.description}</p>
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className={`size-option ${size === selectedSize ? 'selected' : ''}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
        {/* <p className="productdisplay-right-category">
          <span>Category</span> Women, T-Shirt, Crop Top
        </p> */}
        {/* <p className="productdisplay-right-category">
          <span>Tags</span> Modern, Latest
        </p> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
