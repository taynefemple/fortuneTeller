const app = require('commander');
const { presentNumbers, pickedNumber, readFortune } = require('./logic')

app
  .version('0.0.1')
  .description('Playground fortune teller');

app
  .command()
