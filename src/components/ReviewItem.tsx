import React from "react";
import Image from "next/Image";
import classes from "./Reviews.module.css";
import placeholder from "./Img/placeholder-review.png";
import StarRateIcon from "@mui/icons-material/StarRate";

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
    <li className={classes.reviewItem_ctn}>
      <Image src={placeholder} width='80px' height='80px' layout='fixed' />
      <div className={classes.reviewItem_info}>
        <h1>{review.username}</h1>
        <span className={classes.reviewItem_rating}>
          <StarRateIcon fontSize='inherit'></StarRateIcon>
          {review.rating}
        </span>
        <p>{review.comment}</p>
      </div>
    </li>
  );
};

export default ReviewItem;
