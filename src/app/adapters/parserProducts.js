function parserProducts(line) {
  const indice = line.indexOf("=");
  const price = Number.isNaN(Number.parseFloat(line.substr(indice + 1)))
    ? 0
    : Number.parseFloat(line.substr(indice + 1)).toFixed(2);

  const products = line
    .substr(0, indice)
    .trim()
    .split(",")
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  return { products, price };
}

module.exports = { parserProducts };
