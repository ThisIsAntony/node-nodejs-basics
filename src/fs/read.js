import fs from "fs";
import path from "path";
import { stderr } from "process";
import { fileURLToPath } from "url";
import {
  errorMessage,
  fileToRead,
  FOLDER_FILES,
} from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const read = async () => {
  const filePath = path.join(__dirname, FOLDER_FILES, fileToRead);

  try {
    await new Promise((res, rej) => {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          return rej(new Error(errorMessage));
        }
        console.log(data);
        res()
      });
    });
  } catch (e) {
    stderr.write(e.message);
  }
};

read();
