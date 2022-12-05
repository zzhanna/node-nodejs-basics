import { readdir } from "node:fs/promises";
import { getPath, checkIfFile } from "../helpers/helpers.js";

const folderPath = getPath(import.meta.url, "");

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
