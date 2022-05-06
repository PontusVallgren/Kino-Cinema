import React from "react";
import ReviewItem from "./ReviewItem";
import classes from "./Reviews.module.css";
import { v4 as uuidv4 } from "uuid";

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
    <ul className={classes.reviewList}>
      {reviews.map((review) => (
        <ReviewItem key={uuidv4()} review={review} />
      ))}
    </ul>
  );
};

export default ReviewList;
