import { createWriteStream } from "node:fs";
import { getPath } from "../helpers/helpers.js";
import { pipeline } from "node:stream/promises";

const pathToFile = getPath(import.meta.url, "fileToWrite.txt");

const write = async () => {};
const writableFromTerminal = process.stdin;
const writableToFile = createWriteStream(pathToFile);
pipeline(writableFromTerminal, writableToFile);
await write();
