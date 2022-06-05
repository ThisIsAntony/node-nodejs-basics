import zlib from "zlib";
import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { fileURLToPath } from "url";
import {
  FOLDER_FILES,
  fileToCompress,
  archive,
} from "../utils/constants/constants.js";

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const readStream = createReadStream(
    path.join(__dirname, FOLDER_FILES, archive)
  );

  const writeStream = createWriteStream(
    path.join(__dirname, FOLDER_FILES, fileToCompress)
  );

  const compressStream = zlib.createUnzip();

  readStream
    .on("data", (data) => data)
    .pipe(compressStream)
    .pipe(writeStream);
};

decompress();
