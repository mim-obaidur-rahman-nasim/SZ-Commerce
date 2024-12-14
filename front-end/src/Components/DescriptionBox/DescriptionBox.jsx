import React, { useState, useEffect } from "react";
import "./DescriptionBox.css";

const DescriptionBox = ({ productId }) => {
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  // Fetch product description and reviews
  useEffect(() => {
    fetch(`http://localhost:4000/product/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch description");
        }
        return response.json();
      })
      .then((data) => setDescription(data.description))
      .catch((error) => console.error("Error fetching description:", error));

    fetch(`http://localhost:4000/reviews/${productId}`)
      .then((response) => response.json())
      .then((data) => setReviews(data.reviews))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, [productId]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!rating) {
      alert("Please provide a rating");
      return;
    }

    if (newReview.trim()) {
      try {
        const response = await fetch("http://localhost:4000/addreview", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
          body: JSON.stringify({
            productId,
            reviewText: newReview,
            rating,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setReviews([...reviews, { reviewText: newReview, rating }]); // Update reviews state
          setNewReview("");
          setRating(0); // Reset rating
        } else {
          console.error(result.error);
        }
      } catch (error) {
        console.error("Error submitting review:", error);
      }
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
        <p>{description || "Loading description..."}</p>
      </div>

      <div className="descriptionbox-reviews">
        <h3>Customer Reviews:</h3>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <h2>{review.reviewText}</h2>
                <p>Rating: {review.rating} <span>★</span> </p>
              </li>
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
          <div className="rating-input">
            <h4>Rate the product:</h4>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  cursor: "pointer",
                  color: star <= rating ? "#ff4141" : "#ccc",
                }}
              >
                ★
              </span>
            ))}
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default DescriptionBox;
