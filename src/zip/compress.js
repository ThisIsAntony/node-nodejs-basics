import zlib from "zlib";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import {
  FOLDER_FILES,
  fileToCompress,
  archive,
} from "../utils/constants/constants.js";

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const readStream = createReadStream(
    path.join(__dirname, FOLDER_FILES, fileToCompress)
  );

  const writeStream = createWriteStream(
    path.join(__dirname, FOLDER_FILES, archive)
  );

  const compressStream = zlib.createGzip();

  readStream
    .on("data", (data) => data)
    .pipe(compressStream)
    .pipe(writeStream);
};

compress();
