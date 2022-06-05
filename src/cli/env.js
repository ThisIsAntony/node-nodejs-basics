import { envVar } from "../utils/constants/constants.js";
import { env } from "process";

export const parseEnv = () => {
  const results = [];
  for (let key in env) {
    if (key.includes(envVar)) results.push(`${key}=${env[key]}`);
  }
  console.log(results.join("; "));
};

parseEnv();
