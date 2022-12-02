import { rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import checkIfFile from "../helpers/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemovePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    if (!(await checkIfFile(fileToRemovePath)))
      throw new Error("FS operation failed");
    await rm(fileToRemovePath);
  } catch (err) {
    throw new Error(err.message);
  }
};

await remove();
