const { Transform } = require("stream");

function objectToString() {
  const transf = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,

    transform(input, encoding, callback) {
      if (input instanceof Object) {
        this.push(JSON.stringify(input));
      } else {
        this.push(input);
      }
      callback();
    },
  });
  return transf;
}

module.exports = { objectToString };
