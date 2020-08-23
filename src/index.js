const { parseCliArgs } = require("./parseCliArgs");
const { identityPipeline } = require("./app/pipes/identityPipeline");
const { identity } = require("./lib/identity");

// IO Definitions
const { input, output } = parseCliArgs();

identityPipeline(input, output, identity);
