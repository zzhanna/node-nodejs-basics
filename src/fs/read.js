import { readFile } from "node:fs/promises";
import { getPath, checkIfFile } from "../helpers/helpers.js";

const fileToReadPath = getPath(import.meta.url, "fileToRead.txt");

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
