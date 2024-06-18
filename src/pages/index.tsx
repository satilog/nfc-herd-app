import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";

import { useAppContext } from "@/context/AppContext";
import Inventory from "@/partials/Farms";

const Home: NextPage = (
  {
  }
) => {
  return (
    <Layout>
      <div className="flex flex-col flex-row justify-center items-center w-full">
        <h2>NFC Herd</h2>
        <Inventory>
          <h2>Inventory page</h2>
        </Inventory>
      </div>
    </Layout>
  );
};

export default Home;
