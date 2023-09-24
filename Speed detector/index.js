// well detailed user interactive index.js

const readline = require('readline');
const { calculateDemeritPoints } = require('./speed'); // Import the speed-related logic

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the car\'s speed (in km/h): ', (input) => {
  const speed = parseFloat(input);

  if (isNaN(speed)) {
    //determine whether a value is NaN
    console.log('Invalid input. Please enter a valid speed.');
  } else {
    const demeritPoints = calculateDemeritPoints(speed);

    if (demeritPoints === 0) {
      console.log('Ok');
    } else if (demeritPoints >= maxDemeritPoints) {
      console.log('License suspended');
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }

  rl.close();
});
//The system prompts output from the linked speed.js