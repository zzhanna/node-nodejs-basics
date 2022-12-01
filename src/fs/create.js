import fs from "node:fs";
import { writeFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fresh.txt");
const fileText = "I am fresh and young";

const checkIfFile = async (path) => {
  return await access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

const create = async () => {
  if (await checkIfFile(filePath)) throw new Error("FS operation failed");
  else {
    await writeFile(filePath, fileText);
  }
};
await create();
