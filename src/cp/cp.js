import { getPath } from "../helpers/helpers.js";
import { fork } from "node:child_process";

const pathToFile = getPath(import.meta.url, "script.js");

const spawnChildProcess = async (args) => {
  const childProcess = fork(pathToFile, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on("close", () => console.log(`Close child process`));
};

spawnChildProcess();
