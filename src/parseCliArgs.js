const fs = require("fs");

function parseCliArgs({ pricesFile, promotionsFile }) {
  const argv = require("yargs")
    .usage(
      "Usage: $0 [options]\n Reads an input file or the stdin, and writes the corresponding results to a output file or the stdout."
    )
    .example(
      "$0 -i input.txt",
      "Reads the text from 'input.txt', and writes the corresponding results to the stdout"
    )
    .alias("c", "prices")
    .nargs("c", 1)
    .describe("c", "Reads prices from a file")
    .alias("m", "promotions")
    .nargs("m", 1)
    .describe("m", "Reads promotions from a file")
    .alias("i", "input")
    .nargs("i", 1)
    .describe("i", "Reads from a file")
    .alias("o", "output")
    .nargs("o", 1)
    .describe("o", "Writes to a file")
    .help("h")
    .alias("h", "help")
    .demandCommand(0, 0, "No command accepted")
    .epilog("copyright 2020").argv;

  const prices =
    typeof argv.prices === "undefined"
      ? fs.createReadStream(pricesFile)
      : fs.createReadStream(argv.prices).on("error", onError);

  const promotions =
    typeof argv.promotions === "undefined"
      ? fs.createReadStream(promotionsFile)
      : fs.createReadStream(argv.promotions).on("error", onError);

  const input =
    typeof argv.input === "undefined"
      ? process.stdin
      : fs.createReadStream(argv.input).on("error", onError);

  const output =
    typeof argv.output === "undefined"
      ? process.stdout
      : fs.createWriteStream(argv.output).on("error", onError);

  return { input, output, prices, promotions };

  function onError(err) {
    Error(err);
  }
}

module.exports = { parseCliArgs };
