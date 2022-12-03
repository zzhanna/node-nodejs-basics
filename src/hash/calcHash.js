import { createHash } from "node:crypto";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createReadStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const readStream = createReadStream(filePath);
  const hash = createHash("sha256");
  try {
    await pipeline(readStream, hash);
    console.log(hash.digest("hex"));
  } catch (err) {
    throw new Error(err.message);
  }
};

await calculateHash();
