import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";
import Farms from "@/partials/Farms";

import { NextPage } from "next";

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <Farms></Farms>
    </Layout>
  );
};

export default Home;
