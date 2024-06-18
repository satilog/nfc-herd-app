import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";

import { useAppContext } from "@/context/AppContext";
import CattleList from "@/partials/Farms";
import Farms from "@/partials/Farms";
import SignIn from "@/partials/SignIn";

const Home: NextPage = (
  {
  }
) => {
  return (
    <Layout>
      {/* <Farms></Farms> */}
      <SignIn></SignIn>

      {/* <div className="flex flex-col flex-row justify-center items-center w-full">
        <h2>NFC Herd</h2>
        <CattleList>
          <h2>CattleList page</h2>
        </CattleList>
      </div> */}
    </Layout>
  );
};

export default Home;
