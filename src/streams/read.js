import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { getPath } from "../helpers/helpers.js";

const pathToFile = getPath(import.meta.url, "fileToRead.txt");

const read = async () => {
  const readFromFile = createReadStream(pathToFile, { encoding: "utf8" });
  pipeline(readFromFile, process.stdout);
};

await read();
