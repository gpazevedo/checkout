function parser(text, lineParser) {
  const lines = text.split("\n");

  return lines
    .map((line) => lineParser(line.trim()))
    .filter((line) => line.length > 0);
}

module.exports = { parser };
