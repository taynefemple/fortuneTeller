const app = require('commander');
const { prompt } = require('inquirer')
const { fortuneTeller } = require('./logic')

fortuneTeller();
