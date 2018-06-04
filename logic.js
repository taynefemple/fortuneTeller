const rl = require("readline")

const numbers = {
  odds: [2, 7, 4, 1],
  evens: [3, 6, 8, 5]
}

// hard code these for now...in future generate a ton and randomly present
const fortunes = {
  1: 'Your startup will fail after an initial meteoric rise. Don\'t worry though you\'ll have your adderall addiction to keep you busy',
  2: 'Sadly your death is imminent. Get your affairs in order',
  3: 'I have lifted the gypsy curse. You\'re welcome.',
  4: 'You learn from your mistakes...you will learn a lot today',
  5: '',
  6: '',
  7: '',
  8: ''
}

const presentNumbers = (num) => {

}

const pickedNumber = (num) => {
  if (num % 2) {
    console.log("Pick a number: " + numbers.evens)
  } else {
    console.log("Pick a number: " + numbers.odd)
  }
}

const readFortune = (num) => {
  console.log("The spirits have spoken...: " + fortunes[num])
}



const fortuneTeller = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Pick a number from 1-10 and I will tell you your fortune", (num) => {
    pickedNumber(num)
  });

}

module.exports = { presentNumbers, pickedNumber, readFortune }
