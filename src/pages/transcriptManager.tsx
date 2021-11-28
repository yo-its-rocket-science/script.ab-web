import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import {
  AppBar,
  Typography,
  Paper,
  Grid,
  Button,
  Link,
  TextField,
  Box,
  Stack,
  Container,
  Chip,
} from "@mui/material";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { BaseTextFieldProps } from "@mui/material";
import axios from "axios";

type Transcript = {
  code: string;
  skills: string[];
};

const Cell: React.FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "flex",
        "m-6",
        ...(className ? className.split(" ") : [])
      )}
    >
      {children}
    </div>
  );
};

const Transcript = ({ transcript }: { transcript: Transcript }) => {
  const [course, setCourse] = React.useState(transcript.code);
  const [changed, setChanged] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(event.target.value);
    setChanged(true);
  };

  return (
    <>
      <Cell className="mx-6 my-3 p-3 bg-blueGray-100">
        <Typography component="p" variant="h6">
          {transcript.code}
        </Typography>
      </Cell>
      <Cell className="mx-6 my-3 p-3 bg-blueGray-100">
        <Typography component="p" variant="h6">
          <div className="flex gap-3">
            {transcript.skills.map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </div>
        </Typography>
      </Cell>
      <Cell />
    </>
  );
};

function useTranscriptData() {
  return useQuery<Transcript[]>("transcriptData", async () => {
    const transcriptData = await fetch("/api/transcript").then((res) =>
      res.json()
    );

    return transcriptData;
  });
}

const TranscriptManager: NextPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data } = useTranscriptData();
  const [transcriptData, setTranscriptData] = useState(data);

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    if (value === "") {
      setTranscriptData(data);
      return;
    }

    setTranscriptData(
      (transcriptData ?? []).filter(
        (transcript) =>
          transcript.code.toLowerCase().includes(value.toLowerCase()) ||
          transcript.skills.some((skill) =>
            skill.toLowerCase().includes(value.toLowerCase())
          )
      )
    );
  };

  useEffect(() => {
    if (data) {
      setTranscriptData(data);
    }
  }, [data]);

  return (
    <div>
      <Navbar />

      <div
        className="grid w-3/4 my-0 mx-auto items-center"
        style={{ gridTemplateColumns: "1fr 3fr 1fr" }}
      >
        <Cell>
          <Button variant="contained">Upload Transcript</Button>
        </Cell>
        <Cell>
          <TextField
            value={search}
            onInput={onSearchInputChange}
            className="w-full"
            placeholder="Search"
          />
        </Cell>
        <Cell />

        <Cell className="bg-gray-200 p-3 rounded-md">
          <Typography fontWeight="bold" component="h2" variant="h5">
            Courses
          </Typography>
        </Cell>
        <Cell className="bg-gray-200 p-3 rounded-md">
          <Typography fontWeight="bold" component="h2" variant="h5">
            Skills
          </Typography>
        </Cell>
        <Cell>
          <Button variant="contained" onClick={() => router.push("/jobs")}>
            Find Jobs
          </Button>
        </Cell>

        {(transcriptData ?? []).map((transcript) => (
          <Transcript key={transcript.code} transcript={transcript} />
        ))}
      </div>
    </div>
  );
};

export default TranscriptManager;
