import { copyFile, mkdir, readdir } from "fs";
import path from "path";
import { stderr } from "process";
import { fileURLToPath } from "url";
import {
  errorMessage,
  FOLDER_FILES,
  FOLDR_FILES_COPY,
} from "../utils/constants/constants.js";

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, FOLDER_FILES);
  const dirCopyPath = path.join(__dirname, FOLDR_FILES_COPY);

  try {
    await new Promise((res, rej) => {
      readdir(dirCopyPath, (err) => {
        if (!err) rej(new Error(errorMessage));
        return mkdir(dirCopyPath, (err) => {
          if (err) rej(new Error(errorMessage));
          res();
        });
      });
    });

    await new Promise((res, rej) => {
      readdir(dirPath, (err, files) => {
        if (err) rej(new Error(errorMessage));

        files.forEach((file) => {
          const copyPath = path.join(dirCopyPath, file);
          const inputPath = path.join(dirPath, file);

          copyFile(inputPath, copyPath, (err) => {
            if (err) rej(new Error(errorMessage));
            res();
          });
        });
      });
    });
  } catch (e) {
    stderr.write(e.message);
  }
};

copy();
