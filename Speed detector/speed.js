// SPEEDING TICKET CALCULATOR
 // Takes the speed the user inputs in km/hr which is recieved using the document.getElementById() method
 // The speed is parsed as an integer value using parseInt() and given a variable called speed

 // speed operator system

const speedLimit = 70;
const demeritPointsPer5KmOverLimit = 1;
const maxDemeritPoints = 12;

function calculateDemeritPoints(speed) {
  if (speed <= speedLimit) {
    return 0;
  } else {
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / 5);
    return Math.min(demeritPoints, maxDemeritPoints);
  }
}

module.exports = {
  calculateDemeritPoints,
};
