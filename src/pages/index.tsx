import { useState } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const onEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <Head>
        <title>Script.ab</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          square
          className="flex flex-col justify-center items-start bg-gradient-to-b from-blue-200"
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <Typography component="h1" variant="h2">
                Explore Jobs <span className="font-bold">In Alberta</span>
              </Typography>
              <Typography component="h2" variant="h5">
                Upload your university transcript and the system will do the
                rest!
              </Typography>
            </div>
            <Box
              component="form"
              sx={{ mt: 1 }}
              className="flex flex-col w-full"
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="w-1/2"
                onClick={() => router.push(`/signup`)}
              >
                Get started
              </Button>
              <Grid container className="flex gap-3">
                <Grid item xs className="w-1/2">
                  <Link href="/jobs" passHref>
                    <Button
                      type="a"
                      href="/employer"
                      fullWidth
                      variant="outlined"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      I am an employer
                    </Button>
                  </Link>
                </Grid>
                <Grid item className="w-1/2">
                  <Link href="/jobs" passHref>
                    <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                      I am a third party
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1617687555807-c704ca149eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </div>
  );
};

export default Home;
