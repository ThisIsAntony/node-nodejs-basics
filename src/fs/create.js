import { access, open, appendFile, F_OK } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import {
  errorMessage,
  FOLDER_FILES,
  misterFile,
  misterMessage,
} from "../utils/constants/constants.js";
import { stderr } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  const filePath = join(__dirname, FOLDER_FILES, misterFile);

  try {
    await new Promise((res, rej) => {
      access(filePath, F_OK, (err) => {
        if (!err) rej(new Error(errorMessage));
        res();
      });
    });

    await new Promise((res, rej) => {
      open(filePath, "w", (err) => {
        if (err) rej(new Error(errorMessage));
        res();
      });
    });

    await new Promise((res, rej) => {
      appendFile(filePath, misterMessage, (err) => {
        if (err) rej(new Error(errorMessage));
        res();
      });
    });
  } catch (e) {
    stderr.write(e.message);
  }
};

create();
