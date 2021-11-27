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

const TranscriptData = [
  {
    id: 1,
    course: "CSCE413",
    skills: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "React",
      },
    ],
    xp: 3,
  },
  {
    id: 2,
    course: "CSCE214",
    skills: [
      {
        id: 1,
        name: "Java",
      },
      {
        id: 2,
        name: "Communication",
      },
    ],
    xp: 2,
  },
];

const Transcript = ({
  transcript,
}: {
  transcript: typeof TranscriptData[0];
}) => {
  const [course, setCourse] = React.useState(transcript.course);
  const [changed, setChanged] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCourse(event.target.value);
    setChanged(true);
  };

  return (
    <Container className="border-2 border-black-500 rounded-sm shadow">
      <Box className="flex flew-row gap-3 items-center">
        <TextField
          margin="normal"
          id="courseName"
          label="Course name"
          name="courseName"
          value={course}
          onChange={handleChange}
        />

        <div className="flex-grow">
          <h2>Skills:</h2>
          {transcript.skills.map((skill) => (
            <span key={skill.id}>{skill.name}, </span>
          ))}
        </div>
        <div>
          {changed ? <Button variant="contained">Update Course</Button> : null}
        </div>
      </Box>
    </Container>
  );
};

const TranscriptManager: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={3} className="m-3">
        <Grid item xs={2}>
          <Button variant="contained">Update Transcript</Button>
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained" className="m-1 self-end">
            Add Course
          </Button>
          <div>
            {TranscriptData.map((course) => (
              <div key={course.id}>
                <Transcript transcript={course} />
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={2}>
          <Link href="/jobs">
            <Button variant="contained">View jobs</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default TranscriptManager;
