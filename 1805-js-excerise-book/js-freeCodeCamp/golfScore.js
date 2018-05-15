function golfScore(par, strokes) {
  // 请只修改这条注释以下的代码
  var chazhi = strokes - par
  if (strokes === 1) {
    return "Hole-in-one!";
  }
  if (chazhi <= -2) {
    return "Eagle";
  }
  switch(chazhi) {
    case -1:
      return "Birdie";
    case 0:
      return "Par";
    case 1:
      return "Bogey";
    case 2:
      return "Double Bogey"
  }

  return "Go Home!";
  // 请只修改这条注释以上的代码
}

// 你可以修改这一行来测试你的代码
golfScore(5, 4);
console.log("一杆进洞")
console.log(golfScore(5,1))
console.log("老鹰球")
console.log(golfScore(5,2))
console.log(golfScore(5,3))
console.log("小鸟球")
console.log(golfScore(5,4))
console.log("平杆")
console.log(golfScore(5,5))
console.log("超一杆")
console.log(golfScore(5,6))
console.log("超两杆")
console.log(golfScore(5,7))
console.log("回家吧！")
console.log(golfScore(5,10))
