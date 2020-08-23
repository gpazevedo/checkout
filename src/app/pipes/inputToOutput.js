const { Transform } = require("stream");

function inputToOutput(func) {
  const transf = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,

    transform(input, encoding, callback) {
      const result = func(input);

      if (result instanceof Array) {
        result.forEach((element) => {
          if (element) {
            this.push(element);
          }
        });
      } else if (result) {
        this.push(result);
      }

      callback();
    },
  });
  return transf;
}
module.exports = { inputToOutput };
