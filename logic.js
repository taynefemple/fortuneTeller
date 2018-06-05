const readline = require('readline');

const colors = ['amber', 'blue', 'green', 'violet'];

const numbers = {
  odds: [2, 7, 4, 1],
  evens: [3, 6, 8, 5]
};

// hard code these for now...in future generate a ton and randomly present
const fortunes = {
  1: 'Your startup will fail after an initial meteoric rise. Don\'t worry though, you\'ll have your adderall addiction to keep you busy',
  2: 'Sadly your death is imminent. LOOK OUT BEHIND YOU!',
  3: 'I have lifted the gypsy curse. Now go eat a sandwich already.',
  4: 'You learn from your mistakes...you will learn a lot today',
  5: '5 Lorem Ipsum',
  6: '6 Lorem Ipsum',
  7: '7 Lorem Ipsum',
  8: '8 Lorem Ipsum'
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const readFortune = (num) => {
  console.log('The spirits have spoken...: ' + fortunes[num]);
  rl.close();
};

const pickedNumber = (num) => {
  if (num % 2) {
    rl.question('Pick a number: ' + numbers.evens, (chosen) => {
      readFortune(chosen);
    })
  } else {
    rl.question('Pick a number: ' + numbers.odds, (chosen) => {
      readFortune(chosen)
    })
  }
};

const presentNumbers = () => {
  rl.question('Pick a number', (num) => {
    pickedNumber(num);
  })
};

const presentColors = () => {
  rl.question('Pick a color so we may begin...: ' + colors.join(', ') + '\n', (color) => {
    if (colors.includes(color.toLowerCase())) {
      pickedNumber(color.length);
    }
    else {
      console.log('That color is not inscribed! Do not anger the spirits!');
      presentColors();
    }
  })
};

const fortuneTeller = () => {
  presentColors();
}

module.exports = { presentNumbers, pickedNumber, readFortune, fortuneTeller }
