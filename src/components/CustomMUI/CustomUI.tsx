import { Button, Tab, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import React from "react";
import { CustomBtnProps } from "../../types";
export const CustomText = styled(Typography, {
  shouldForwardProp: (props) => props !== "sx",
})(() => ({
  fontWeight: "bold",
  color: "white",
  fontFamily: "Open sans",
  "&:hover": {
    color: "primary",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#primary",
    fontWeight: "bold",
  },
}));

export const CenterBox = styled(Box, {
  shouldForwardProp: (props) => props !== "sx",
})(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const CenterHorizon = styled(Box, {
  shouldForwardProp: (props) => props !== "sx",
})(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const PreviousPageBtn = styled(ArrowCircleLeftRoundedIcon, {
  shouldForwardProp: (props) => props !== "sx",
})(() => ({
  margin: "0.5em",
  color: "#ffff",
  fontSize: 40,
  cursor: "pointer",
}));

export const CustomButton = styled(Button, {
  shouldForwardProp: (props) => props !== "sx",
})(() => ({
  fontFamily: "Open sans",
  fontSize: "30px",
  padding: "20px",
  color: "white",
}));

export const CustomBtn: React.FC<CustomBtnProps> = (
  customBtnProps: CustomBtnProps
) => {
  return (
    <>
      <CustomButton
        variant="contained"
        color={customBtnProps.btnColor}
        sx={{ padding: `${customBtnProps.btnPadding}` }}
      >
        <CustomText>{customBtnProps.btnText}</CustomText>
      </CustomButton>
    </>
  );
};
