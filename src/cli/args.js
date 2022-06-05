import process from "process";
import { regArgs } from "../utils/constants/constants.js";

export const parseArgs = () => {
  const args = process.argv.slice(2);
  args.map((item, index, array) => {
    if (
      RegExp(regArgs).test(item) &&
      !RegExp(regArgs).test(array[index + 1]) &&
      array[index + 1]
    ) {
      console.log(`${item.slice(2)} is ${array[index + 1]}`);
    }
  });
};

parseArgs();
