import path from "path";
import { fileURLToPath } from "url";
import { fork } from "child_process";
import { stdin, stdout } from "process";
import { cpScripteFile, FOLDER_FILES } from "../utils/constants/constants.js";

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, FOLDER_FILES, cpScripteFile);
  const childProcess = fork(filePath, args, { silent: true });

  childProcess.stdout.pipe(stdout);
  stdin.pipe(childProcess.stdin);
};

spawnChildProcess([3, 1, 4]);
