import { createUnzip } from "node:zlib";
import { createWriteStream } from "node:fs";
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { getPath } from "../helpers/helpers.js";

const pathFileToUnzip = getPath(import.meta.url, "fileToCompress.txt");
const pathFileZip = getPath(import.meta.url, "archive.gz");

const decompress = async () => {
  const readFile = createReadStream(pathFileZip);
  const writeFile = createWriteStream(pathFileToUnzip);
  const unzip = createUnzip();
  pipeline(readFile, unzip, writeFile);
};

await decompress();
