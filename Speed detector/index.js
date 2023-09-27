//we use readline to get user input for the speed of the car.


const readline = require('readline');
const calculateDemeritPoints = require('./speed.js');
// We then import the calculateDemeritPoints function from speed.js and use it to calculate.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the speed of the car (in km/h): ', (speed) => {
  const result = calculateDemeritPoints(speed);
  console.log(result);
  rl.close();
});
