import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import checkIfFile from "../helpers/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const oldFilePath = path.join(
  path.join(__dirname, "files"),
  "wrongFilename.txt"
);
const newFilePath = path.join(
  path.join(__dirname, "files"),
  "properFilename.md"
);

const rename = async () => {
  try {
    if (await (!checkIfFile(oldFilePath) || checkIfFile(newFilePath)))
      throw new Error("FS operation failed");
    await promises.rename(oldFilePath, newFilePath);
  } catch (err) {
    throw new Error(err.message);
  }
};

await rename();
