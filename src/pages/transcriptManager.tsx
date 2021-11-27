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
  },
  {
    id: 2,
    course: "CSCE414",
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
  },
];

const Transcript = ({
  transcript,
}: {
  transcript: typeof TranscriptData[0];
}) => {
  return (
    <Container className="border-2 border-black-500 rounded-sm shadow">
      <Box className="flex flew-row gap-3 items-center">
        <TextField
          margin="normal"
          id="courseName"
          label="Course name"
          name="courseName"
          value={transcript.course}
        />

        <div className="flex-grow">
          <h2>Skills:</h2>
          {transcript.skills.map((skill) => (
            <span key={skill.id}>{skill.name}, </span>
          ))}
        </div>
        <div>
          {false ? <Button variant="contained">Update Course</Button> : <></>}
        </div>
      </Box>
    </Container>
  );
};

const TranscriptManager: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={3} className="m-1">
        <Grid item xs={2}>
          <Button variant="contained" className="m-3">
            Update Transcript
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button variant="contained">Add Course</Button>
          <div>
            {TranscriptData.map((course) => (
              <div key={course.id}>
                <Transcript transcript={course} />
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">View jobs</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TranscriptManager;
