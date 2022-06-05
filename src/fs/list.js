import fs from "fs";
import path from "path";
import { stderr } from "process";
import { fileURLToPath } from "url";
import { errorMessage, FOLDER_FILES } from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const list = async () => {
  const dirPath = path.join(__dirname, FOLDER_FILES);

  try {
    await new Promise((res, rej) => {
      fs.readdir(dirPath, (err, files) => {
        if (err) {
          return rej(new Error(errorMessage));
        }
        console.log(files);
        res();
      });
    });
  } catch (e) {
    stderr.write(e.message);
  }
};

list();
