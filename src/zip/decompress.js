import { createUnzip } from "node:zlib";
import { createWriteStream } from "node:fs";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFileToUnzip = path.join(__dirname, "files", "fileToCompress.txt");
const pathFileZip = path.join(__dirname, "files", "archive.gz");

const decompress = async () => {
  const readFile = createReadStream(pathFileZip);
  const writeFile = createWriteStream(pathFileToUnzip);
  const unzip = createUnzip();
  pipeline(readFile, unzip, writeFile);
};

await decompress();
