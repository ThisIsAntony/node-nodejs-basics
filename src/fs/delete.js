import fs from "fs";
import path from "path";
import { stderr } from "process";
import { fileURLToPath } from "url";
import {
  errorMessage,
  fileToRemove,
  FOLDER_FILES,
} from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const currentFile = fileToRemove;

export const remove = async () => {
  const filePath = path.join(__dirname, FOLDER_FILES, currentFile);

  try {
    await new Promise((res, rej) => {
      fs.unlink(filePath, (err) => {
        if (err) rej(new Error(errorMessage));
        res();
      });
    });
  } catch (e) {
    stderr.write(e.message);
  }
};

remove();
