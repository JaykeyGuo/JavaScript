//直接返回

console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  callback('8:00');
  console.log(3);
}

console.log(4);
function callback(startTime) {
  console.log(5);
  console.log(startTime);
  console.log(6);
}

console.log(7);
checkFlightSchedule(callback);
console.log(8);
