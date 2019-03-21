function count(to,from,inc){
	to = to || 1
	from = from || 1
	inc = inc || 1
	const length = to - from + 1
	const arr = []
	if (length <= 0) {
		return arr
	} else {
		for (var i = 0; i < length; i++) {
			arr.push(from + inc * i)
		}
		return arr
	}
}
let time = new Date()
count(62914560)
let time1 = new Date()
console.log(time1 - time)

function count1 (t, f, c) {
  if (!t) return []
  if (!f && !c) return [...Array(t + 1 || 1).keys()].slice(1)
  if (t < f) return []
  f = f || 1
  c = c || 1
  const s = Math.round((t - f) / c) + 1
  return [...Array(s)].map((c,i) => f + (i * c))
}

let time2 = new Date()
count1(62914560)
let time3 = new Date()
console.log(time3 - time2)
console.log(count1(62914560))