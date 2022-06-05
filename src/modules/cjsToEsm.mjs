import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import fs from "fs";
import { FOLDER_FILES } from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

unknownObject =
  random > 0.5
    ? JSON.parse(fs.readFileSync(path.join(__dirname, FOLDER_FILES, "a.json")))
    : JSON.parse(fs.readFileSync(path.join(__dirname,FOLDER_FILES, "b.json")));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
