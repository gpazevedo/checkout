const { identityPipeline } = require("../pipes/identityPipeline");
const { checkApp, checkFunc } = require("../../lib/checkTransformer");
const { identity } = require("../../lib/identity");
const { double } = require("../../lib/double");

describe("Identity pipeline", () => {
  it("replicate a string", (done) => {
    const input = "Abacaxi";
    const expected = input;

    checkApp(input, expected, identityPipeline, done, identity);
  });
  it("duplicates a string", (done) => {
    const input = "Abacaxi";
    const expected = input + input;

    checkApp(input, expected, identityPipeline, done, double);
  });
  it("replicate an array of string", (done) => {
    const input = ["Abacaxi", "Manga"];
    const expected = "AbacaxiManga";

    checkApp(input, expected, identityPipeline, done, identity);
  });
});
