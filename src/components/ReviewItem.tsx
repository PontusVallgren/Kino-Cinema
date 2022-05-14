import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import useMovieStyles from "./CustomMUI/movieStyles";
import { CustomText } from "./CustomMUI/CustomUI";
import { Review } from "../types";

type ReviewItemProps = {
  review: Review;
};

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  const { classes } = useMovieStyles();
  return (
    <ListItem alignItems='flex-start' className={classes.reviewItem}>
      <ListItemAvatar>
        <Avatar alt='Avatar' src=''></Avatar>
      </ListItemAvatar>
      <ListItemText disableTypography>
        <Box sx={{ color: "white" }}>
          <CustomText fontSize={24}>{review.username}</CustomText>
          <Box sx={{ display: "flex", alignItems: "center", fontSize: "19px" }}>
            <StarRateIcon sx={{ color: "yellow" }} fontSize='small' />
            {review.rating}
          </Box>
          <CustomText>{review.comment}</CustomText>
        </Box>
      </ListItemText>
    </ListItem>
  );
};

export default ReviewItem;
