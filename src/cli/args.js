const parseArgs = () => {
  const args = process.argv.slice(2);
  let argsArr = [];
  for (let i = 0; i < args.length; i += 2) {
    argsArr.push(`${args[i].replace("--", "")} is ${args[i + 1]}`);
  }
  console.log(argsArr.join(", "));
};

parseArgs();
