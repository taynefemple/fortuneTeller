const chalk = require('chalk')

const colors = [chalk.yellow('amber'), chalk.blue('blue'), chalk.greenBright('green'), chalk.magenta('violet')];
const colorStrings = ['amber', 'blue', 'green', 'violet']

const numbers = {
  odds: [2, 7, 4, 1],
  evens: [3, 6, 8, 5]
};

// hard code these for now...in future generate a ton and randomly present
const fortunes = {
  1: chalk.green('\n Your startup will fail after an initial meteoric rise.\n Don\'t worry though, you\'ll have your adderall addiction to keep you busy\n'),
  2: chalk.green('\n Sadly your death is imminent.\n LOOK OUT BEHIND YOU!\n'),
  3: chalk.green('\n I have lifted the gypsy curse.\n Now go eat a sandwich already.\n'),
  4: chalk.green('\n You learn from your mistakes...\n you will learn a lot today\n'),
  5: chalk.green('\n Same old song, just a drop of water in an endless sea\n All we do crumbles to the ground though we refuse to see\n Dust in the wind\n All we are is dust in the wind\n Oh, ho, ho\n'),
  6: chalk.green('\n Do not show up to the bike rack after school on Wednesday.\n That kid is going to beat your ass.'),
  7: chalk.green('\n You laugh now, wait \'til you get home.\n'),
  8: chalk.green('\n Self pleasure is the answer.\n Rejoice and find what\'s inside you.\n You know that means masturbation, right?\n'),
  9: chalk.green('\n I would say your self-loathing isn\'t necessary, but you\'re a terrible human being\n ...sooooooo\n ...yeah'),
  10: chalk.green('\n Time to buy a lotto ticket, it\'s your lucky day!'),
  11: chalk.green('\n You are a 404 soul...\n lost,\n Lost,\n LOST I tell you!\n'),
  12: chalk.green('\n I got nothin\' for ya\'.\n Go take some mushrooms and run around in the woods.\n You\'ll find more answers that way...\n'),
  13: chalk.green('\n It doesn\'t take a fortune teller to tell you to lay off the food fattie\n'),
  14: chalk.green('\n Your resemblance to a muppet will prevent the world from taking you seriously\n'),
  15: chalk.green('\n Whoever smelt it dealt it. I\'m looking at you, pal... \n'),
  16: chalk.green('\n Fuck Trump\n'),
  17: chalk.green('\n Game over, man. Game over! What the fuck are we gonna do now? \n'),
  18: chalk.green('\n Jordan is the best of all time. Lebron? What\'s wrong with you?\n'),
};

module.exports = { colors, colorStrings, numbers, fortunes }
