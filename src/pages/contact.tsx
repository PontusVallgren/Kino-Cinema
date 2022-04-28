import { Box } from "@mui/system";
import React from "react";
import Contact from "../components/Contact";
import PreviousPageButton from "../components/PreviousPageButton";
import classes from "../components/Contact.module.css";

const contact = () => {
  return (
    <div className="main">
      <PreviousPageButton />
      <h1 className={classes.title0}>Kontakta oss</h1>
      <Contact></Contact>
      <Box sx={{ height: "2px" }}></Box>
    </div>
  );
};

export default contact;
