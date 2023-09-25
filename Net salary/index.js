const getGrade = require("./salary.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter basic salary : ", () => {
  console.log(getsalary(salary));
  rl.close();
});

  // Your salary calculation code (use the previous code here)