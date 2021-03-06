import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
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
  fontSize: "15",
  padding: "5px",
  color: "white",
  fontWeight: "bold",
}));
