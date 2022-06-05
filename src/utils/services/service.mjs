import { Transform } from "stream";

export class ReverseStream extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, enc, callback) {
    const currentChunk = chunk.toString();
    const reverseChunk = currentChunk.split("").reverse().join("") + "\n";
    this.push(reverseChunk);
    callback();
  }
}
