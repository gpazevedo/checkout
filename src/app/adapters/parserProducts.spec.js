const { parserProducts } = require("./parserProducts");

describe("parserProducts ", () => {
  it("replicates a string", () => {
    const input = "A,B,C=50";
    const expected = { price: "50.00", products: ["A", "B", "C"] };

    expect(parserProducts(input)).toEqual(expected);
  });

  it("replicates a string", () => {
    const input = "Abacaxi,Manga,Cc5=50.76";
    const expected = { price: "50.76", products: ["Abacaxi", "Manga", "Cc5"] };

    expect(parserProducts(input)).toEqual(expected);
  });

  it("break a text in an line array", () => {
    const input = "abacaxi";
    const expected = { products: [], price: 0 };

    expect(parserProducts(input)).toEqual(expected);
  });
});
