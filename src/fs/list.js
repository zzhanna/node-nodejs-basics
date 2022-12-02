import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import checkIfFile from "../helpers/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");

const list = async () => {
  try {
    if (!(await checkIfFile(folderPath)))
      throw new Error("FS operation failed");
    const listFile = await readdir(folderPath);
    console.log(listFile);
  } catch (err) {
    throw new Error(err.message);
  }
};

await list();
