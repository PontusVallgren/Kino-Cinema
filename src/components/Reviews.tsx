import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

type ReviewsProps = {
  reviews: [];
  id: string;
};

const Reviews: React.FC<ReviewsProps> = ({ reviews, id }) => {
  const [showReviews, setShowReviews] = useState(false);

  const handleToggle = () => {
    setShowReviews(!showReviews);
  };
  return (
    <div>
      <h1>Reviews</h1>
      <button onClick={handleToggle}>OPEN</button>
      {showReviews && (
        <>
          <ReviewList reviews={reviews} />
          <ReviewForm id={id} />
        </>
      )}
    </div>
  );
};

export default Reviews;
