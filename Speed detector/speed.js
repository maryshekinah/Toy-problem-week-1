// contains a function calculateDemeritPoints which takes the speed as input and calculates the demerit points.
let speed;
function calculateDemeritPoints(speed) {
  if (speed < 70) {
    return 'Ok';
  } else {
    const demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
      return 'License suspended';
    } else {
      return 'Points: ' + demeritPoints;
    }
  }
}

module.exports = calculateDemeritPoints;
