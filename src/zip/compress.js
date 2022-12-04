import { createGzip } from "node:zlib";
import { createWriteStream } from "node:fs";
import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathFileForZip = path.join(__dirname, "files", "fileToCompress.txt");
const pathFileZip = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const readFile = createReadStream(pathFileForZip);
  const writeFile = createWriteStream(pathFileZip);
  const zip = createGzip();
  pipeline(readFile, zip, writeFile);
};

await compress();
