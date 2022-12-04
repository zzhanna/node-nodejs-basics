import { createWriteStream } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pipeline } from "node:stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {};
const writableFromTerminal = process.stdin;
const writableToFile = createWriteStream(pathToFile);
pipeline(writableFromTerminal, writableToFile);
await write();
