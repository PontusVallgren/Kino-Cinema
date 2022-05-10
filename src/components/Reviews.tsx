import React, { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import { CustomText } from "./CustomMUI/CustomUI";
import useMovieStyles from "./CustomMUI/movieStyles";

type ReviewsProps = {
  reviews: [];
  id: string;
};

const Reviews: React.FC<ReviewsProps> = ({ reviews, id }) => {
  const { classes } = useMovieStyles();

  const [showReviews, setShowReviews] = useState(false);

  const handleToggle = () => {
    setShowReviews(!showReviews);
  };
  return (
    <Box>
      <Box className={classes.toggleReview}>
        <CustomText variant='h4'>Recensioner</CustomText>
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
      </Box>
      {showReviews && (
        <>
          <ReviewList reviews={reviews} />
          <ReviewForm id={id} />
        </>
      )}
    </Box>
  );
};

export default Reviews;
