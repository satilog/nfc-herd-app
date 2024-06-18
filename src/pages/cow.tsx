import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";
import Cow from "@/partials/Cow";

import { NextPage } from "next";

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <Cow></Cow>
    </Layout>
  );
};

export default Home;
