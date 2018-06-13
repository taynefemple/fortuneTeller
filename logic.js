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

// TODO -- refactor pickedNumber for DRY ==> readFortune function, .includes function

const pickedNumber = (num) => {
  let sel;
  num % 2 === 0 ? sel = numbers.evens : sel = numbers.odds;
  let counter = false;
  const firstTime = () => {
    if (!counter) {
      rl.question('Pick a number: ' + sel.join(', ') + '\n', (chosen) => {
        if (sel.includes(+chosen)) {
          counter = !counter;
          chosen % 2 === 0 ? sel = numbers.evens : sel = numbers.odds;
          firstTime();
        }
        else {
          console.log(chalk.red('That number is not inscribed! Cthulhu grows angry...'));
          firstTime();
        }
      })
    } else {
      rl.question('Select a number to reveal your ' + chalk.green('fortune: ') + sel.join(', ') + '\n', (chosen) => {
        if (sel.includes(+chosen)) {
          player.play('./assets/clip2.mp3', function (err) {
            if (err) throw err
          })
          setTimeout(() => readFortune(chosen), 3000)
        }
        else {
          console.log(chalk.red('C\'mon! Just pick a damn number!'));
          firstTime();
        }
      })
    }
  }
  return firstTime(num);
};

const presentColors = () => {
  rl.question('Pick a color so we may begin divining your ' + chalk.green('fortune') + '...: ' + colors.join(', ') + '\n', (color) => {
    if (colorStrings.includes(color.toLowerCase())) {
      pickedNumber(color.length);
    }
    else {
      console.log(chalk.red('That color is not inscribed! Do not anger the spirits!'));
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
