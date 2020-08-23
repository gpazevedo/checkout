const { parserProducts } = require("./parserProducts");

describe("parserProducts ", () => {
  it("replicates a string", () => {
    const input = "ABC=50";
    const expected = { price: "50.00", products: ["A", "B", "C"] };

    expect(parserProducts(input)).toEqual(expected);
  });

  it("break a text in an line array", () => {
    const input = "abacaxi";
    const expected = { products: [], price: 0 };

    expect(parserProducts(input)).toEqual(expected);
  });
});
