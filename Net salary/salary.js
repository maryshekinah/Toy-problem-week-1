let basicSalary;
let benefits;
function calculateNetSalary(basicSalary, benefits) {
  //Compute the payee 
  let payee = Math.floor((basicSalary + benefits) * 0.25);
  //Compute NHIF deductions
  let NHIFDeductions = Math.floor(basicSalary * 0.02);
  //Compute NSSF deductions
  let NSSFDeductions = Math.floor(basicSalary * 0.12);
  //Compute gross salary
  let grossSalary = Math.floor(basicSalary + benefits);
  //Compute net salary
  let netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

console.log(`${netSalary}`);
}