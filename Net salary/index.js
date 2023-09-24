const readline = require('readline');
const { calculateNatSalary } = require('./salary.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const benefits = parseFloat(document.getElementById("benefits").value);

  // Your salary calculation code (use the previous code here)