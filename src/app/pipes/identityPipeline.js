const { inputToOutput } = require("../pipes/inputToOutput");
const { objectToString } = require("../../lib/objectToString");

function identityPipeline(input, output, func, objectMode = false) {
  if (objectMode) {
    return input.pipe(inputToOutput(func)).pipe(objectToString()).pipe(output);
  } else {
    return input.pipe(inputToOutput(func)).pipe(output);
  }
}

module.exports = { identityPipeline };
