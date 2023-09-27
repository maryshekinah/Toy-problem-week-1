// index.js

const readline = require('readline');
const netSalary = require('./salary.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Basic Salary: ', (basicSalary) => {
  rl.question('Enter Benefits: ', (benefits) => {
    rl.question('Deduct NSSF (true/false): ', (deduct_nssf) => {
      rl.question('Deduct NHIF (true/false): ', (deduct_nhif) => {
        const netPay = netSalary(basicSalary, benefits, deduct_nssf === 'true', deduct_nhif === 'true');
        console.log(`Net Salary: ${netPay}`);
        rl.close();
      });
    });
  });
});
