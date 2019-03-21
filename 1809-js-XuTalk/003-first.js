const print = console.log

function first(array) {
    return (array != null && array.length)
        ? array[0]
        : undefined
}

print(first(['1', '2']))
// => 1
print(first('HelloJS'))
// => H
print(first([]))
// => undefined
print(first(''))
// => undefined
print(first({ a: 1 }))
// => undefined
print(first(NaN))
// => undefined
print(first(null))
// => undefined
print(first(undefined))
// => undefined