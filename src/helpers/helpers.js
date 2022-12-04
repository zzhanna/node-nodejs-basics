import fs from "fs";
import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";

const getPath = (url, fileName) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return join(__dirname, "files", fileName);
};

const checkIfFile = async (path) => {
  return await access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

export { checkIfFile, getPath };
