const { Readable, Transform } = require("stream");

function getOutput() {
  const output = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
      chunk = chunk instanceof Object ? Buffer.from([chunk]) : chunk;
      this.push(chunk);
      callback();
    },
  });
  return output;
}

function getInput(input) {
  const chunk = input instanceof String ? Buffer.from(input) : input;
  const readable = new Readable({ objectMode: true });
  readable._read = () => {}; // _read is required but you can noop it
  readable.push(chunk);
  readable.push(null);
  return readable;
}

function check(input, expected, transf, done) {
  const stream = getInput(input).pipe(transf).pipe(getOutput());
  const result = [];

  stream.on("data", (chunk) => {
    result.push(chunk);
  });
  stream.on("end", () => {
    expect(result).toEqual(expected);
    done();
  });
}

function checkFunc(input, expected, transf, done, func) {
  const stream = getInput(input).pipe(transf(func)).pipe(getOutput());
  const result = [];

  stream.on("data", (chunk) => {
    result.push(chunk);
  });
  stream.on("end", () => {
    expect(result).toEqual(expected);
    done();
  });
}

function checkApp(input, expected, main, done, funcs, objectMode = false) {
  const stream = main(getInput(input), getOutput(), funcs, objectMode);
  stream.setEncoding("utf8");

  let result = "";

  stream.on("data", (chunk) => {
    result += chunk;
  });
  stream.on("end", () => {
    expect(result).toEqual(expected);
    done();
  });
}

module.exports = { check, checkFunc, checkApp };
