import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { stdout } from "process";
import { fileToRead, FOLDER_FILES } from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  const readStream = fs.createReadStream(
    path.join(__dirname, FOLDER_FILES, fileToRead)
  );

  readStream.on("data", (chunk) => {
    stdout.write(`${chunk.toString()}\n`);
  });
};

read();
