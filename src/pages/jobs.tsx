import React from "react";
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
  Item,
  Container,
} from "@mui/material";
const JobData = [
  {
    id: 1,
    title: "Frontend Developer",
    image: "",
    company: "Atla.ML",
    location: "Calgary",
    description: "Junior Frontend Developer",
    date: "2020-01-01",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    id: 2,
    title: "Backend Developer",
    image: "",
    company: "Neo Financial",
    location: "Edmonton",
    description: "Junior Backend Developer",
    date: "2020-01-01",
    skills: ["Node.js", "Express", "MongoDB", "Python", "Django"],
  },
  {
    id: 3,
    title: "Fullstack Developer",
    image: "",
    company: "Amazon",
    location: "Calgary",
    description: "Junior Fullstack Developer",
    date: "2020-01-01",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    id: 4,
    title: "Fullstack Developer",
    image: "",
    company: "Alberta Government",
    location: "Grand Prarie",
    description: "Junior Fullstack Developer",
    date: "2020-01-01",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
  {
    id: 5,
    title: "Frontend Developer",
    image: "",
    company: "Facebook",
    location: "Calgary",
    description: "Junior Frontend Developer",
    date: "2020-01-01",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
  },
];

const JobCard = ({ job }) => {
  return (
    <Container>
      <Box className="border-black border-2 flex flex-row justify-between">
        <img src={job.image} />
        <h2>{job.title}</h2>
        <p>{job.date}</p>
        <p>{job.description}</p>
        <p>{job.location}</p>
        <p>{job.salary}</p>
        <Button variant="contained">Apply</Button>
      </Box>
    </Container>
  );
};

const Jobs: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="m-5">
        {JobData.map((job) => (
          <div key={job.id} className="m-3">
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Jobs;
