import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { getPath } from "../helpers/helpers.js";

const filePath = getPath(import.meta.url, "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const fileText = await readFile(filePath);
    const hash = createHash("sha256").update(fileText).digest("hex");
    console.log(hash);
  } catch (err) {
    throw new Error(err.message);
  }
};

await calculateHash();
