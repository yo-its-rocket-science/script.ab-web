// @ts-ignore

import React, { useState, useEffect } from "react";
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
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { JobData } from "../mockJobs";
import { useQuery } from "react-query";

const ViewJob = (props) => {
  const router = useRouter();
  const [Job, setJob] = useState(JobData[0]);

  useEffect(() => {
    if (router.query.id) {
      // const numid = +router.query.id;
      setJob(JobData.find((job) => job.id === +router.query.id));
    }
  }, [router.query.id]);

  return (
    <>
      <Navbar title={"Job Details"} />
      <div className="flex flex-col ">
        <div className="w-full">
          <div className="flex flex-row items-center justify-center bg-gray-100">
            <div className="m-3">
              <Image
                src="/job.jpg"
                layout="intrinsic"
                height={100}
                width={100}
                alt="Company logo"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-baseline">
              <div className="flex-initial">
                <p>
                  <b>{Job.title}</b> - {Job.company}
                </p>
              </div>
              <div>
                <p>{Job.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SkillMatch skill={Job.skills} />
        </div>
        <Container>
          <h4 className="text-lg m-3">Description</h4>
          <p>{Job.description}</p>
        </Container>
      </div>
    </>
  );
};

function useSkills() {
  return useQuery("skills", async () => {
    const skills = await fetch("/api/skills").then((res) => res.json());
    return skills;
  });
}

const SkillMatch = (props) => {
  const { data: allSkills } = useSkills();

  const [skills, setSkills] = useState(props.skill);
  const levels = {
    Strong: "Strong Match",
    Partial: "Partial Match",
    Unmatched: "Unmatched",
  };

  const columns: GridColDef[] = [
    { field: "match", headerName: "Match Level", width: 150 },
    { field: "skill", headerName: "Skill", width: 900 },
  ];

  const jobSkills = new Set(props.skill);
  const StrongMatchSkill = Array.from(
    new Set([...(allSkills ?? [])].filter((x) => jobSkills.has(x)))
  );
  let UnmatchedSkills = Array.from(
    new Set([...(allSkills ?? [])].filter((x) => !jobSkills.has(x)))
  );
  //split array into two
  const PartialMatch = UnmatchedSkills.slice(0, UnmatchedSkills.length / 2);
  UnmatchedSkills = UnmatchedSkills.slice(UnmatchedSkills.length / 2);

  const rows: GridRowsProp = [
    { id: 1, match: levels.Strong, skill: StrongMatchSkill },
    { id: 2, match: levels.Partial, skill: PartialMatch },
    { id: 3, match: levels.Unmatched, skill: UnmatchedSkills },
  ];

  return (
    <>
      <Container>
        <div className="w-full" style={{ height: 300 }}>
          <DataGrid
            columns={columns}
            rows={rows}
            pagination={null}
            density={"compact"}
          />
        </div>
      </Container>
    </>
  );
};

const JobCard = ({ job }) => {
  const router = useRouter();
  return (
    <Container>
      <Box className="border-black border-2 rounded-lg flex flex-row justify-between ring-1 items-center">
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
        <div className="mr-4">
          <Button variant="contained" onClick={() => router.push("/viewJob")}>
            View
          </Button>
        </div>
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

export default ViewJob;
