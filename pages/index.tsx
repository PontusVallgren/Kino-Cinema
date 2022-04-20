import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="main">
      <Head>
        <title>Risbäck Cinema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello fellow developers!</h1>
    </div>
  );
};

export default Home;
