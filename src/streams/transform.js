import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const readableFromTerminal = process.stdin;
  const writableToTerminal = process.stdout;
  const reverseTransform = new Transform({
    transform(chunk, enc, callback) {
      const reversChunk = chunk.toString().trim().split("").reverse().join("");
      callback(null, reversChunk + "\n");
    },
  });
  pipeline(readableFromTerminal, reverseTransform, writableToTerminal);
};

await transform();
