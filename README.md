# Toy-problem-week-1
## Grading system

The system function prompts the user to input a mark and then parses it as a number.It checks if the input is a valid number between 0 and 100. If the input is invalid, it shows an alert and returns.Based on the mark, it calculates the corresponding grade according to your specified criteria.The output should correspond the correct grade as shown;
   ```sh
 A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
 
```
### Solution
The function
 ```sh
 
function calculateGrade(mark)
 
```


## Speed detector

We import the calculateDemeritPoints function from speed.js.We use the readline module to take user input for the car's speed.The program then prints "Ok" if there are no demerit points, "License suspended" if the points exceed the maximum, or the number of points otherwise.

### Solution
We first declare our variable names with constants as follows;
 ```sh
 
const speedLimit = 70;
const demeritPointsPer5KmOverLimit = 1;
const maxDemeritPoints = 12;
 
```

The function
 ```sh
 
function calculateDemeritPoints(speed)
 
```
Then proceed with a statement to check if the spped meets a specific criteria.

## Net salary
We have functions to calculate payee (tax), NHIF deductions, and NSSF deductions.The calculateNetSalary function takes the basic salary and benefits as input, calculates the gross salary, total deductions (PAYEE, NHIF, NSSF), and net salary, and returns the result. 
KRA, NHIF, and NSSF values provided in the link below.

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye


### Solution
The function
```sh
 
function salaryCalculator(basicSalary)
 
```
Proceed ahead by calling out other rates with the data provided in the links above.

## Tech

I have used an open source project to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [jQuery] - duh


## Installation

Toy problem requires [Node.js](https://nodejs.org/) v10+ to run.


## Testing

Open your favorite Terminal and run these commands.

First Tab:

```sh
node index.js
```

## License
 GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.


   [git-repo-url]: < https://github.com/maryshekinah/Toy-problem-week-1>
   [node.js]: <http://nodejs.org>
  

  

