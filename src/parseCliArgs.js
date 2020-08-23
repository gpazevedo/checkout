const fs = require("fs");

function parseCliArgs() {
  const argv = require("yargs")
    .usage(
      "Usage: $0 [options]\n Reads an input file or the stdin, and writes the corresponding results to a output file or the stdout."
    )
    .example(
      "$0 -i input.txt",
      "Reads the text from 'input.txt', and writes the corresponding results to the stdout"
    )
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

  const input =
    typeof argv.input === "undefined"
      ? process.stdin
      : fs.createReadStream(argv.input).on("error", onError);

  const output =
    typeof argv.output === "undefined"
      ? process.stdout
      : fs.createWriteStream(argv.output).on("error", onError);

  return { input, output };

  function onError(err) {
    Error(err);
  }
}

module.exports = { parseCliArgs };
