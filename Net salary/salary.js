//has a function netsalary
function netSalary() {
    // Variable names declared by let
        let basicSalary;
        let benefits;
        let deduct_nssf;
        let deduct_nhif;
  //Calculating the gross salary/Total income of the individual
        const totalIncome = () => {
            let total = 0;
            if (basicSalary !== null && benefits !== null) {
                if (basicSalary >= 0 && benefits >= 0) {
                    total = basicSalary + benefits;
                }
            }
            return total;
        };
  // i have invoked the nssfDeduction function to provide the correct nssf deductions
        const deductNSSF = () => {
            let deduction = 0;
            if (deduct_nssf) {
                deduction = nssfDeduction();
            } else {
                deduction = 0;
            }
            return deduction;
        };
  //i have invoked the nhifDeduction function to provide the correct nhif deductions
        const deductNHIF = () => {
            let deduction = 0;
            if (deduct_nhif) {
                deduction = nhifDeduction();
            } else {
                deduction = 0;
            }
            return deduction;
        };
  //calculate the nssf deductions
        const nssfDeduction = () => {
            let basicSalary = totalIncome();
            let nssfAmount =  basicSalary * 0.12;
            return nssfAmount;
        };
  //calculate the nhif deductions according to each person's income
        const nhifDeduction = () => {
            let basicSalary = totalIncome();
            let nhifAmount = 0;
  
            if (basicSalary <= 5999) {
                nhifAmount = 150;
            } else if (basicSalary >= 6000 && basicSalary <= 7999) {
                nhifAmount = 300;
            } else if (basicSalary >= 8000 && basicSalary <= 11999) {
                nhifAmount = 400;
            } else if (basicSalary >= 12000 && basicSalary <= 14999) {
                nhifAmount = 500;
            } else if (basicSalary >= 15000 && basicSalary <= 19999) {
                nhifAmount = 600;
            } else if (basicSalary >= 20000 && basicSalary <= 24999) {
                nhifAmount = 750;
            } else if (basicSalary >= 25000 && basicSalary <= 29999) {
                nhifAmount = 850;
            } else if (basicSalary >= 30000 && basicSalary <= 34999) {
                nhifAmount = 900;
            } else if (basicSalary >= 35000 && basicSalary <= 39999) {
                nhifAmount = 950;
            } else if (basicSalary >= 40000 && basicSalary <= 44999) {
                nhifAmount = 1000;
            } else if (basicSalary >= 45000 && basicSalary <= 49999) {
                nhifAmount = 1100;
            } else if (basicSalary >= 50000 && basicSalary <= 59999) {
                nhifAmount = 1200;
            } else if (basicSalary >= 60000 && basicSalary <= 69999) {
                nhifAmount = 1300;
            } else if (basicSalary >= 70000 && basicSalary <= 79999) {
                nhifAmount = 1400;
            } else if (basicSalary >= 80000 && basicSalary <= 89999) {
                nhifAmount = 1500;
            } else if (basicSalary >= 90000 && basicSalary <= 99999) {
                nhifAmount = 1600;
            } else if (basicSalary >= 100000) {
                nhifAmount = 1700;
            }
  
        return nhifAmount;
    };
  // Calculate the tax from each person's gross salary/total income
        const getTaxOnTaxableIncome = () => {
            let income = totalIncome();
            let amount = 0;
  
        if ((income <= 24000)) {
            amount += income * 0.1;
        } else if (income >= 24001 && income <= 32333) {
            amount += income * 0.25;
        } else if (income >= 32334 && income <= 500000) {
            amount += income * 0.30;
        } else if (income >= 500001 && income <= 800000) {
            amount += income * 0.325;
        } else if (income > 800000) {
            amount += income * 0.35;
        }
        return amount;
    };
  // calculate the personal relief
        const getPersonalRelief = () => {
            let relief = 2400;
            return relief;
        };
  // calculate the tax on each persons's relief
        const getTaxOffRelief = () => {
            let amount = getTaxOnTaxableIncome() - getPersonalRelief();
            return amount;
        };
  // calculate each person's paye
        const getPAYE = () => {
            let amount = getTaxOnTaxableIncome() - getPersonalRelief();
            return amount;
        };
  // calculate the house levy
        const houseTax = () => {
          let amount = totalIncome() * 0.03;
          return amount;
        };
  // calculate the net salary
        const getNetPay = () => {
            let paye = getPAYE();
            let nhif = deductNHIF();
            let relief = getTaxOffRelief();
            let nssf = deductNSSF();
            let houseLevy = houseTax();
            let totalAmount = totalIncome();
  
            let pay = totalAmount - (paye + nhif + relief + nssf + houseLevy);
            return pay;
        };
  
        console.log(pay);
    };