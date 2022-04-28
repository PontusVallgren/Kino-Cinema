import { Box } from "@mui/system";
import React from "react";
import Thanks from "../components/Thanks";

const thanks = () => {
  return (
    <div className="main">
      <Thanks></Thanks>
      <Box sx={{ height: "2px" }}></Box>
    </div>
  );
};

export default thanks;
