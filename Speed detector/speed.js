const speedLimit = 70;
const demeritPointsPer5KmOverLimit = 1;
const maxDemeritPoints = 12;
// declare the variable names with a constant variable
function calculateDemeritPoints(speed) {
  if (speed <= speedLimit) {
    return 0;
  } else {
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / 5);
    return Math.min(demeritPoints, maxDemeritPoints);
  }
}
// if else statement 
// math.floor to convert demeritpoints to whole number
//math.min to look for the minimum value
module.exports = {
  calculateDemeritPoints,
};
// holds the exported values and functions from that module.exports 