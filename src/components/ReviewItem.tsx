import React from "react";

type Review = {
  username: string;
  rating: number;
  comment: string;
};

type ReviewItemProps = {
  review: Review;
};

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <li>
      <h1>{review.username}</h1>
      <span>{review.rating}</span>
      <p>{review.comment}</p>
    </li>
  );
};

export default ReviewItem;
