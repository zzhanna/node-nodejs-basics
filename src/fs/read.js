import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import checkIfFile from "../helpers/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToReadPath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    if (!(await checkIfFile(fileToReadPath)))
      throw new Error("FS operation failed");
    const fileToRead = await readFile(fileToReadPath, {
      encoding: "utf8",
    });
    console.log(fileToRead);
  } catch (err) {
    throw new Error(err.message);
  }
};

await read();
