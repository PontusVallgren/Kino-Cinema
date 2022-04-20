import React from "react";
import { Box } from "@mui/system";
import { CenterBox, CustomText } from "./CustomMUI.tsx/CustomUI";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import { BottomNavigation } from "@mui/material";

const FooterKino = () => {
  return (
    <CenterBox
      sx={{
        backgroundColor: "#212331",
        textAlign: "center",
        padding: "40px 0",
        bottom: "0",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <Box>
        <CustomText>
          Risbäck Cinema{" "}
          <SmartphoneIcon
            sx={{ position: "relative", top: "6px", color: "#52b5ee" }}
          />{" "}
          123 45 678
        </CustomText>
      </Box>
      <Box>
        <CustomText>
          <LocationOnIcon
            sx={{ position: "relative", top: "6px", color: "#ee5252" }}
          />
          Location : Risbäckgatan 1337
        </CustomText>
      </Box>
      <Box>
        <CustomText>
          <MailIcon
            sx={{
              position: "relative",
              top: "6px",
              color: "#f5d15b",
              marginRight: "3px",
            }}
          />
          Riskback@risback.com
        </CustomText>
      </Box>
    </CenterBox>
  );
};

export default FooterKino;
