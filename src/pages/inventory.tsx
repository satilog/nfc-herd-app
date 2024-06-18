import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Layout from "@/containers/Layout";
import Inventory from "@/partials/Inventory";

import { NextPage } from "next";

const Home: NextPage = ({}) => {
  return (
    <Layout>
      <Inventory></Inventory>
    </Layout>
  );
};

export default Home;
