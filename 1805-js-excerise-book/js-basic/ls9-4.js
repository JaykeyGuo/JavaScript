//异步

console.log(1);
function checkFlightSchedule(callback) {
  console.log(2);
  setTimeout(function() {
    console.log(3);
    callback('8:00');
  }, 5000);
  console.log(4);
}

//----------------------------------------
console.log(5);
function callback(startTime) {
  console.log(6);
  console.log(startTime);
  console.log(7);
}

console.log(8);
checkFlightSchedule(callback);
console.log(9);
