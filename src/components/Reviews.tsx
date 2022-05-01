import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import classes from "./Reviews.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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
      <div className={classes.btnCtn}>
        <h1>Recensioner</h1>
        {!showReviews && (
          <KeyboardArrowDownIcon
            fontSize='large'
            cursor='pointer'
            onClick={handleToggle}
          ></KeyboardArrowDownIcon>
        )}
        {showReviews && (
          <KeyboardArrowUpIcon
            fontSize='large'
            cursor='pointer'
            onClick={handleToggle}
          ></KeyboardArrowUpIcon>
        )}
      </div>
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
