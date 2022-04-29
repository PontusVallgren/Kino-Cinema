import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <div className="main">
        <h1>Hello fellow developers!</h1>
        <Box sx={{ height: "110vh", backgroundColor: "yello" }}>hello</Box>
      </div>
    </>
  );
};

export default Home;
