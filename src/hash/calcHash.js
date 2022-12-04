import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { readFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

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
