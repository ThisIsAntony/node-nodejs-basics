import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

export const nthFibonacci = (n) => {
  if (isMainThread) {
    const worker = new Worker(__filename, { workerData: n });
    worker.on("message", console.log);
  } else {
    return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
  }
};

export const sendResult = () => {
  if (!isMainThread) parentPort.postMessage(nthFibonacci(workerData));
};

nthFibonacci(10);
sendResult();
