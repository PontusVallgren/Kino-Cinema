import React from "react";
import ReviewItem from "./ReviewItem";
import { v4 as uuidv4 } from "uuid";
import List from "@mui/material/List";
import useMovieStyles from "./CustomMUI/movieStyles";
import { Review } from "../types";

type ReviewListProps = {
  reviews: Review[];
};

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  const { classes } = useMovieStyles();
  return (
    <List className={classes.reviewList}>
      {reviews.map((review) => (
        <ReviewItem key={uuidv4()} review={review} />
      ))}
    </List>
  );
};

export default ReviewList;
