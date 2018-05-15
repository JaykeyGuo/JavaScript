//同步的间接返回

console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  callback('8:00');
  return "查完了";
  console.log(3);
}

console.log(4);
function callback(startTime) {
  console.log(5);
  console.log(startTime);
  console.log(6);
}

console.log(7);
var result = checkFlightSchedule(callback);
console.log(result);
console.log(8);
