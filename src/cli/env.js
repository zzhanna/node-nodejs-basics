const parseEnv = () => {
  const values = Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .map((el) => ` ${el}=${process.env[el]};`);

  return console.log(values.join("").trim().slice(0, -1));
};

parseEnv();
