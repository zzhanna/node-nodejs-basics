import fs from "fs";
import { access } from "node:fs/promises";

const checkIfFile = async (path) => {
  return await access(path, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

export default checkIfFile;
