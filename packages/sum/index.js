const chalk = require('chalk');

module.exports = (x, y) => {
  console.log(`Adding ${chalk.blue(x)} + ${chalk.blue(y)}`);

  return x + y;
};
