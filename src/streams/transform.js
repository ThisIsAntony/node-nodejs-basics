import { stdin, stdout } from "process";
import { ReverseStream } from "../utils/services/service.mjs";

export const transform = async () => {
  const reverseStream = new ReverseStream();

  stdin
    .on("data", (data) => data)
    .pipe(reverseStream)
    .pipe(stdout);
};

transform();
