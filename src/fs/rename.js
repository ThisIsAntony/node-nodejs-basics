import fs from "fs";
import path from "path";
import { stderr } from "process";
import { fileURLToPath } from "url";
import {
  errorMessage,
  FOLDER_FILES,
  properFilename,
  wrongFilename,
} from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
  const filePath = path.join(__dirname, FOLDER_FILES, wrongFilename);
  const filePathRename = path.join(__dirname, FOLDER_FILES, properFilename);

  try {
    await new Promise((res, rej) => {
      fs.access(filePath, fs.F_OK, (err) => {
        if (err) rej(new Error(errorMessage));
        res();
      });
    });

    await new Promise((res, rej) => {
      fs.access(filePathRename, fs.F_OK, (err) => {
        if (!err) rej(new Error(errorMessage));
        res();
      });
    });

    await new Promise((res, rej) => {
      fs.rename(filePath, filePathRename, (err) => {
        if (err) rej(new Error(errorMessage));
        res();
      });
    });
  } catch (e) {
    stderr.write(e.message);
  }
};

rename();
