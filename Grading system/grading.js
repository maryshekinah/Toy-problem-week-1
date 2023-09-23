
function calculateGrade(mark) {
    if (mark > 79) {            // if condition is met execute it.....
      return 'A';
    } else if (mark >= 60) {    //else if
      return 'B';
    } else if (mark >= 50) {
      return 'C';
    } else if (mark >= 40) {
      return 'D';
    } else {
      return 'E';      
    }
  }
  // exucute multiple conditions
  module.exports = {
    calculateGrade,
  };
  /// holds the exported values and functions from that module.exports 