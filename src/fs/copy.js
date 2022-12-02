import { copyFile, readdir, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import checkIfFile from "../helpers/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");
const folderCopyPath = path.join(__dirname, "files_copy");

const copy = async () => {
  if (await (!checkIfFile(folderPath) || checkIfFile(folderCopyPath)))
    throw new Error("FS operation failed");
  try {
    const list = await readdir(folderPath);
    await mkdir(folderCopyPath);

    await list.forEach((fileName) =>
      copyFile(
        path.join(folderPath, fileName),
        path.join(folderCopyPath, fileName)
      )
    );
  } catch (err) {
    throw new Error(err.message);
  }
};

copy();
