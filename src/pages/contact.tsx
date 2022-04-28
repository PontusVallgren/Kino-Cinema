import { Box } from "@mui/system";
import React from "react";
import Contact from "../components/Contact";

const contact = () => {
  return (
    <div className="main">
      <Contact></Contact>
      <Box sx={{ height: "2px" }}></Box>
    </div>
  );
};

export default contact;
