// well detailed user interactive index.js
const readline = require('readline');
const { calculateGrade } = require('./grading.js'); // Import the calculateGrade function

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the student\'s mark (between 0 and 100): ', (input) => {
  const mark = parseFloat(input);

  if (isNaN(mark) || mark < 0 || mark > 100) {
    console.log('Invalid input. Please enter a valid mark between 0 and 100.');
  } else {
    const grade = calculateGrade(mark); // Use the imported function
    console.log(`The student's grade is: ${grade}`);
  }

  rl.close();
});
