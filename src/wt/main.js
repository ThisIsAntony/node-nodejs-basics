import os from "os";
import path from "path";
import { fileURLToPath } from "url";
import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import { workerFileName } from "../utils/constants/constants.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let num = 10;

const cores = os.cpus().length;

export const performCalculations = async () => {
  if (isMainThread) {
    const workers = Array.from({ length: cores }, () => {
      return new Promise((res) => {
        const worker = new Worker(path.join(__dirname, workerFileName), {
          workerData: num++,
        });
        worker.on("message", res);
      });
    });

    const arrayData = await Promise.allSettled(workers);
    const resolvedResult = arrayData.map((data) => {
      const { value, reason } = data;
      return {
        status: reason ? "error" : "resolved",
        data: reason ? null : value,
      };
    });
    console.log(resolvedResult);
  } else {
    return parentPort.postMessage(workerData);
  }
};

performCalculations();
