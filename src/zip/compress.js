import { createGzip } from "node:zlib";
import { createWriteStream } from "node:fs";
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { getPath } from "../helpers/helpers.js";

const pathFileForZip = getPath(import.meta.url, "fileToCompress.txt");
const pathFileZip = getPath(import.meta.url, "archive.gz");

const compress = async () => {
  const readFile = createReadStream(pathFileForZip);
  const writeFile = createWriteStream(pathFileZip);
  const zip = createGzip();
  pipeline(readFile, zip, writeFile);
};

await compress();
