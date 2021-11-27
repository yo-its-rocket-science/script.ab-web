import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { parse } from "csv-parse";
import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

type TranscriptDTO = {
  code: string;
  skills: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pathToTranscript = path.resolve(
    "./src/pages/api/csv/processed_transcript.csv"
  );
  const pathToModels = path.resolve(
    "./src/pages/api/csv/model_courses_skills.csv"
  );
  const transcriptFileData = await readFile(pathToTranscript, "utf8");
  const modelFileData = await readFile(pathToModels, "utf8");

  parse(transcriptFileData, (err, transcriptRecords) => {
    if (err) {
      console.error(err);
      return;
    }

    transcriptRecords.shift();

    const transcript = transcriptRecords.map((record) => {
      return {
        code: `${record[0]} ${record[1]}`,
      };
    });

    parse(modelFileData, (err, modelRecords) => {
      if (err) {
        console.error(err);
        return;
      }

      modelRecords.shift();

      const matchingModels = modelRecords.filter((record) =>
        transcript.some((t) => t.code.toLowerCase() === record[5].toLowerCase())
      );

      const reducedModels = matchingModels.reduce((acc, curr) => {
        const skill = curr[0];
        const code = curr[5];

        if (acc[code]) {
          acc[code].push(skill);
        } else {
          acc[code] = [skill];
        }

        return acc;
      }, {});

      // this can be done in the reduce above but I'm lazy
      const result = new Set(
        Object.values(reducedModels)
          .map((skills) => {
            return skills;
          })
          .flatMap((skills) => skills)
      );

      res.status(200).json(Array.from(result));
    });
  });
}
