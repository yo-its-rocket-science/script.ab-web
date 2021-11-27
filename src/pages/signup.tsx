import React, { useMemo, useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Link,
} from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useDropzone } from "react-dropzone";
import { Navbar } from "../components/Navbar";
import { FileCopy } from "@mui/icons-material";

type SignUpUser = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

const SignUp: NextPage = () => {
  const router = useRouter();
  const { email } = router.query as { email: string };
  const [files, setFiles] = useState<File[]>([]);
  const [userData, setUserData] = useState<SignUpUser>({
    firstName: "",
    lastName: "",
    password: "",
    email,
  });

  useEffect(() => {
    if (email) {
      setUserData({
        ...userData,
        email,
      });
    }
  }, [email]);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Create a user in db

    console.log(userData, files);
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
          className="flex flex-col justify-center items-center"
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
            <div className="flex flex-col items-start w-full">
              <Typography component="h1" variant="h2">
                Welcome!
              </Typography>
              <Typography component="h2" variant="h5">
                We need a few things to get started
              </Typography>
            </div>
            <Box
              component="form"
              sx={{ mt: 1 }}
              className="flex flex-col w-full"
              onSubmit={handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                autoFocus
                value={userData.firstName}
                onInput={onInput}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="family-name"
                value={userData.lastName}
                onInput={onInput}
              />
              <TextField
                margin="normal"
                required
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={userData.password}
                onInput={onInput}
              />
              <StyledDropzone files={files} setFiles={setFiles} />
              <Link href="/transcriptManager">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  className="w-1/2"
                >
                  Submit
                </Button>
              </Link>
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

function StyledDropzone({ files, setFiles }: { files: File[]; setFiles: any }) {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
    maxFiles: 1,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <div className="container">
      {/* @ts-ignore */}
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>Drag n drop or click to upload your transcript here</p>
      </div>
      {(files || []).map((file) => (
        <div key={file.name} className="flex gap-3 my-2">
          <FileCopy />
          <p>{file.name}</p>
        </div>
      ))}
    </div>
  );
}

export default SignUp;
