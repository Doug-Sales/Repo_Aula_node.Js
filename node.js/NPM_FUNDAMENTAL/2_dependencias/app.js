const _ = require('lodash')
const chalk = require('chalk')

let a = [15, 8, 74, 9, 35, 1, 87, 44, 10, 9, 16]
let b = [18, 15, 57, 82, 39, 61, 73, 45]

const dife = _.difference(a,b)
console.log(chalk.bgMagentaBright(dife))

// console.log(require)