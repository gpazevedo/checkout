const { parser } = require("./parser");
const { identity } = require("../../lib/identity");

describe("parser ", () => {
  it("replicates a string", () => {
    const input = "5 6";
    const expected = [input];

    expect(parser(input, identity)).toEqual(expected);
  });

  it("break a text in an line array", () => {
    const input = "abacaxi\nmanga\n laranja\n";
    const expected = ["abacaxi", "manga", "laranja"];

    expect(parser(input, identity)).toEqual(expected);
  });
});
