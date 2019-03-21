const print = console.log

const MAX_SAFE_INTEGER = 9007199254740991

function isLength(value) {
    value = +value
    return typeof value == "number" && 
        value !== NaN &&
        value > -1 &&
        value % 1 == 0 &&
        value <= MAX_SAFE_INTEGER
}

print(isLength(1))
// => true
print(isLength(-1))

print(isLength(0))

print(isLength(1.1))

print(isLength(9007199254740991))

print(isLength(-9007199254740991))

print(isLength(9007199254740992))

print(isLength({ x: 1 }))

print(isLength(new Number(1)))

print(isLength(new Number(9007199254740991)))

print(isLength(new Number(9007199254740992)))