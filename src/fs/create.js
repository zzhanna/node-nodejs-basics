import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import checkIfFile from "../helpers/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "fresh.txt");
const fileText = "I am fresh and young";

const create = async () => {
  if (await checkIfFile(filePath)) throw new Error("FS operation failed");
  else {
    await writeFile(filePath, fileText);
  }
};
await create();
