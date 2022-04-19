import React from "react";
import { Box } from "@mui/system";
import { CenterBox, CustomText } from "./CustomMUI.tsx/CustomUI";

const FooterKino = () => {
  return (
    <footer>
      <CenterBox
        sx={{
          backgroundColor: "#212331",
          textAlign: "center",
          padding: "20px",
          position: "fixed",
          left: "0",
          bottom: "0",
          height: "40px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <CustomText>Risbäck Cinema</CustomText>
        </Box>
        <Box>
          <CustomText>Location:Pontusgatan 1337</CustomText>
        </Box>
        <Box>
          <CustomText>Riskback@risback.com</CustomText>
        </Box>
      </CenterBox>
    </footer>
  );
};

export default FooterKino;
