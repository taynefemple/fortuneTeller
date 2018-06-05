const chalk = require('chalk')

const colors = [chalk.yellow('amber'), chalk.blue('blue'), chalk.greenBright('green'), chalk.magenta('violet')];
const colorStrings = ['amber', 'blue', 'green', 'violet']

const numbers = {
  odds: [2, 7, 4, 1],
  evens: [3, 6, 8, 5]
};

// hard code these for now...in future generate a ton and randomly present
const fortunes = {
  1: chalk.green('Your startup will fail after an initial meteoric rise. Don\'t worry though, you\'ll have your adderall addiction to keep you busy\n'),
  2: chalk.green('Sadly your death is imminent. LOOK OUT BEHIND YOU!\n'),
  3: chalk.green('I have lifted the gypsy curse. Now go eat a sandwich already.\n'),
  4: chalk.green('You learn from your mistakes...you will learn a lot today\n'),
  5: chalk.green('You are a 404 soul...lost, Lost, LOST I tell you!\n'),
  6: chalk.green('It doesn\'t take a fortune teller to tell you to lay off the food fattie\n'),
  7: chalk.green('You laugh now, wait \'til you get home.\n'),
  8: chalk.green('Self pleasure is the answer. Rejoice and find what\'s inside you. You know that means masturbation, right?\n')
};

module.exports = { colors, colorStrings, numbers, fortunes }
