import { AppBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Script.ab</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" style={{ padding: 16 }}>
        <Typography variant="h6">Script.ab</Typography>
      </AppBar>

      <Box component="main">
        <Typography variant="h1">🏗️</Typography>
      </Box>

      <footer className={styles.footer}>
        <a
          href="https://github.com/yo-its-rocket-science/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Rocket Science Logo"
              width={126}
              height={64}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
