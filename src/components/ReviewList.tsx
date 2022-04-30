import React from "react";
import ReviewItem from "./ReviewItem";

type Review = {
  username: string;
  rating: number;
  comment: string;
};

type ReviewListProps = {
  reviews: Review[];
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewItem key={review.comment} review={review} />
      ))}
    </ul>
  );
};

export default ReviewList;
