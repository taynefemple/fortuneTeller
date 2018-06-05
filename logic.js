const readline = require('readline');
const chalk = require('chalk')
const player = require('play-sound')(opts = {})
const { colors, colorStrings, numbers, fortunes } = require('./data')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readFortune = (num) => {
  console.log('The spirits have spoken...: ' + fortunes[num]);
  rl.close();
};

const pickedNumber = (num) => {
  let sel;
  num % 2 ? sel = numbers.evens : sel = numbers.odds
  let counter = false;
  const firstTime = () => {
    if (!counter) {
      rl.question('Pick a number: ' + sel.join(', ') + '\n', (chosen) => {
        counter = !counter;
        firstTime();
      })
    } else {
      rl.question('Select a number to reveal your ' + chalk.green('fortune: ') + sel + '\n', (chosen) => {
        player.play('./assets/clip2.mp3', function (err) {
          if (err) throw err
        })
        setTimeout(() => readFortune(chosen), 3000)
      })
    }
  }
  return firstTime();
};

const presentColors = () => {
  rl.question('Pick a color so we may begin divining your ' + chalk.green('fortune') + '...: ' + colors.join(', ') + '\n', (color) => {
    if (colorStrings.includes(color.toLowerCase())) {
      pickedNumber(color.length);
    }
    else {
      console.log('That color is not inscribed! Do not anger the spirits!');
      presentColors();
    }
  })
};

const fortuneTeller = () => {
  console.log(chalk.red('SUMMONING THE SPIRITS TO DIVINE YOUR FORTUNE!'))
  player.play('./assets/clip.mp3', function (err) {
    if (err) throw err
  })
  setTimeout(() => presentColors(), 3000)
}

module.exports = { pickedNumber, readFortune, fortuneTeller }
