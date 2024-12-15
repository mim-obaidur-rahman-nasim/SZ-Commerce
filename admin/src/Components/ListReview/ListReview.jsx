import React, { useEffect, useState } from "react";
import "./ListReview.css";
import cross_icon from "../../assets/cross_icon.png"; // Use an icon or a simple button

const ListReview = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews from the server
  const fetchReviews = async () => {
    try {
      const response = await fetch("http://localhost:4000/reviews"); // Replace URL if needed
      const data = await response.json();
      setReviews(data.reviews || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Delete a review
  const deleteReview = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/review/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();

      if (data.success) {
        alert("Review deleted successfully");
        fetchReviews(); // Refresh the review list
      } else {
        alert("Failed to delete review");
      }
    } catch (error) {
      console.error("Error deleting review:", error);
      alert("Error deleting review");
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="list-review">
      <h1>All Reviews</h1>
      <div className="listreview-header">
        <p>Product ID</p>
        <p>Review Text</p>
        <p>Rating</p>
        <p>Date</p>
        <p>Remove</p>
      </div>
      <div className="listreview-body">
        {reviews.map((review, index) => (
          <div key={index} className="listreview-item">
            <p>{review.productId}</p>
            <p>{review.reviewText}</p>
            <p>{review.rating}</p>
            <p>{new Date(review.date).toLocaleDateString()}</p>
            <img
              src={cross_icon}
              alt="Delete"
              className="listreview-remove-icon"
              onClick={() => deleteReview(review._id)}
              title="Delete Review"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListReview;
