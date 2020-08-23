const { inputToOutput } = require("./inputToOutput");
const { check } = require("../../lib/checkTransformer");
const { identity } = require("../../lib/identity");

describe("inputToOutput ", () => {
  it("replicates", (done) => {
    const inputText = "5 6";
    const expected = [inputText];
    check(inputText, expected, inputToOutput(identity), done);
  });
});
