import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
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
import { JobData } from "../mockJobs";

const JobCard = ({ job }) => {
  const router = useRouter();
  return (
    <Container>
      <Box
        href={`/viewJob?id=${job.id}`}
        className="border-black border-2 rounded-lg flex flex-row justify-between ring-1 items-center cursor-pointer"
        component="a"
      >
        <div className="ml-8 m-2">
          <Image
            src="/job.jpg"
            layout="intrinsic"
            height={100}
            width={100}
            alt="Company logo"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-baseline flex-initial w-6/12">
          <div className="flex-initial">
            <p>
              <b>{job.title}</b> - {job.company}
            </p>
          </div>
          <div>
            <p>{job.location}</p>
          </div>
          <div>
            {job.skills.map((skill) => (
              <>
                <Chip key={skill} label={skill} className="m-1" />
              </>
            ))}
          </div>
        </div>

        <p>
          <b>Posted:</b> {job.date}
        </p>
        {/* <div className="mr-4">
          <Button variant="contained" onClick={() => router.push("/viewJob")}>
            View
          </Button>
        </div> */}
      </Box>
    </Container>
  );
};

const Jobs: NextPage = () => {
  const [filteredData, setFilteredData] = useState(JobData);

  const handleChange = (e) => {
    const { value } = e.target;
    const filteredData = JobData.filter(
      (job) =>
        job.title.toLowerCase().includes(value.toLowerCase()) ||
        job.company.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="m-5 flex-grow">
          {filteredData.map((job) => (
            <div key={job.id} className="m-3">
              <JobCard job={job} />
            </div>
          ))}
        </div>
        <div className="flex-initial m-6">
          <h1 className="text-lg font-medium">Filters</h1>
          <hr className="m-2" />
          <div className="flex flex-col">
            <TextField label="Search" onChange={handleChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
