import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readFromFile = createReadStream(pathToFile, { encoding: "utf8" });
  pipeline(readFromFile, process.stdout);
};

await read();
