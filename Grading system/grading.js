// The grade is displayed in the #grade paragraph element using the textContent property.
let mark;
function calculateGrade(mark) {
// Takes input values from user
// If else statement
    if (mark >= 80 && mark <= 100) {
      return "A";
    } else if (mark >= 60 && mark < 80) {
      return "B";
    } else if (mark >= 50 && mark < 60) {
      return "C";
    } else if (mark >= 40 && mark < 50) {
      return "D";
    } else if (mark >=0 && mark < 40) {
      return "E";
    } else {
      return "Invalid Grade";
    }
  }



  // exucute multiple conditions
  module.exports = {
    calculateGrade,
  };
  /// holds the exported values and functions from that module.exports 