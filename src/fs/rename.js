import { promises } from "node:fs";
import { getPath, checkIfFile } from "../helpers/helpers.js";

const oldFilePath = getPath(import.meta.url, "wrongFilename.txt");
const newFilePath = getPath(import.meta.url, "properFilename.md");

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
