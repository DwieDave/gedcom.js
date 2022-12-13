const {colors} = require('mocha/lib/reporters/base');
colors.pass = 32;

module.exports = {
    require: "mocha-suppress-logs",
    slow: 500,
    medium: 100,
    fast: 10,
    timeout: 5000,
};