import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {

  const [reviews, setReviews] = useState([
    "Great product! Highly recommended.",
    "I had a fantastic shopping experience!",
  ]);
  const [newReview, setNewReview] = useState('');


  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview('');
    }
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">
          Reviews ({reviews.length})
        </div>
      </div>

      <div className="descriptionbox-description">
        <p>
          This e-commerce demo offers a seamless shopping experience with
          intuitive browsing, secure checkout, multiple payment options like
          Bkash, and real-time order tracking. It’s mobile-friendly, scalable,
          and designed for businesses of all sizes.
        </p>
      </div>

      <div className="descriptionbox-reviews">
        <h3>Customer Reviews:</h3>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}

        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write a review..."
            rows="4"
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default DescriptionBox;
