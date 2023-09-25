function salaryCalculator(basicSalary){
const salary = basicSalary 

    function payeeRates(salary) {
        const taxRate = [
            { min: 0, max: 24000, rate: 0.1 },
            { min: 24001, max: 32333, rate: 0.25 },
            { min: 32334, max: 500000, rate: 0.3 },
            { min: 500001, max: 800000, rate: 0.32 },
            { min: 800001, max: Infinity, rate: 0.35 },
        ];
        for (const rate of taxRate) {
            if (rate.min <= salary && salary <= rate.max) {
                return salary * rate.rate;
            }
        }
        
    }

    const payee = payeeRates(salary)

    function nhifRate(salary) {
        const nhifRates = [
            { min: 0, max: 5999, rate: 150 },
            { min: 6000, max: 7999, rate: 300 },
            { min: 8000, max: 11999, rate: 400 },
            { min: 12000, max: 14999, rate: 500 },
            { min: 15000, max: 19999, rate: 600 },
            { min: 20000, max: 24999, rate: 750 },
            { min: 25000, max: 29999, rate: 850 },
            { min: 30000, max: 34999, rate: 900 },
            { min: 35000, max: 39999, rate: 950 },
            { min: 40000, max: 44999, rate: 1000 },
            { min: 45000, max: 49999, rate: 1100 },
            { min: 50000, max: 59999, rate: 1200 },
            { min: 60000, max: 69999, rate: 1300 },
            { min: 70000, max: 79999, rate: 1400 },
            { min: 80000, max: 89999, rate: 1500 },
            { min: 90000, max: 99999, rate: 1600 },
            { min: 100000, max: Infinity, rate: 1700 },
        ];

        for (const rate of nhifRate) {
            if (rate.min <= salary && salary <= rate.max) {
                return rate.rate;
            }
        }
    }
    const NHIF = nhifRate(salary)

    const nssfRate = salary * 0.06;
    const netSalary = salary - (payee + NHIF + nssfRate);

    return `You have a payee of ${payee} and your netSalary is ${netSalary}`;

}

module.exports = salaryCalculator;
