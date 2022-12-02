import { cp} from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import checkIfFile from "../helpers/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");
const folderCopyPast = path.join(__dirname, "files_copy");

const copy = async () => {
  if (await (checkIfFile(folderCopyPast) || !checkIfFile(folderPath)))
    throw new Error("FS operation failed");
  try {
    await cp(folderPath, folderCopyPast, {
      recursive: true,
    });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

copy();
