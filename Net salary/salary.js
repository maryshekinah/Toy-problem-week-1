// This function to computes  net salary
let basicSalary;
let benefits;
function calculateNetSalary(basicSalary, benefits) {
  // Takes input values from user
  //Computes the payee 
  let payee = Math.floor((basicSalary + benefits) * 0.25);
  //Computes NHIF deductions
  let NHIFDeductions = Math.floor(basicSalary * 0.02);
  //Computes NSSF deductions
  let NSSFDeductions = Math.floor(basicSalary * 0.12);
  //Computes gross salary
  let grossSalary = Math.floor(basicSalary + benefits);
  //Computes net salary
  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
  //Output net salary
console.log(`${netSalary}`);
}