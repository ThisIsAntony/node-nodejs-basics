import path from "path";
import crypto from "crypto";
import fs from "fs";
import util from "util";
import { fileURLToPath } from "url";
import {
  fileToCalculateHashFor,
  FOLDER_FILES,
} from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readFile = util.promisify(fs.readFile);

export const calculateHash = async () => {
  const filePath = path.join(__dirname, FOLDER_FILES, fileToCalculateHashFor);
  const text = await readFile(filePath, "utf-8");

  return crypto.createHash("sha256").update(text).digest("hex");
};

calculateHash().then((data) => console.log(`HEX - ${data}`));
