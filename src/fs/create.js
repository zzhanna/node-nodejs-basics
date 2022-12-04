import { writeFile } from "node:fs/promises";
import { getPath, checkIfFile } from "../helpers/helpers.js";

const filePath = getPath(import.meta.url, "fresh.txt");
const fileText = "I am fresh and young";

const create = async () => {
  if (await checkIfFile(filePath)) throw new Error("FS operation failed");
  else {
    await writeFile(filePath, fileText);
  }
};
await create();
