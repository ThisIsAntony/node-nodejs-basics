import { createWriteStream } from "fs";
import path from "path";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";
import {
  writeFile,
  inputTextMessage,
  closeProgramMessage,
  FOLDER_FILES
} from "../utils/constants/index.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const write = async () => {
  stdout.write(`${inputTextMessage} ${writeFile}\n`);

  const writeStream = createWriteStream(
    path.join(__dirname, FOLDER_FILES, writeFile)
  );

  stdin.on("data", (data) => {
    writeStream.write(data.toString());
    stdout.write(`${closeProgramMessage}\n`);
  });
};

write();
