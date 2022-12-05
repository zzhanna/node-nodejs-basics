import { rm } from "node:fs/promises";
import { getPath, checkIfFile } from "../helpers/helpers.js";

const fileToRemovePath = getPath(import.meta.url, "fileToRemove.txt");

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
