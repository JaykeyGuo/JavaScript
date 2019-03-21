const print = console.log

function clamp (number, lower, upper) {
    number = +number
    lower = +lower
    upper = +upper

    lower = lower === lower ? lower : 0
    upper = upper === upper ? upper : 0

    if (number === number) {
        number = number <= upper ? number : upper 
        number = number >= lower ? number : lower
    }

    return number
}

print(clamp(-1, 2, 3))

print(clamp(2, -2, 3))

print(clamp(4, -2, 3))

print(clamp(1, 2, -3))

print(clamp(-2, 8, -1))

print(clamp('a', 2, 3))

print(clamp(1, 'a', 3))

print(clamp(1, 'a', 'b'))

print(clamp(1, '5', '6'))