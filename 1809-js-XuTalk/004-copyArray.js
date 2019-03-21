const print = console.log

function copyArray(source, array) {
    let index = -1
    const length = (source != null && source.length)
        ? source.length
        : undefined

    array || (array = new Array(length))
    while (++index < length) {
        array[index] = source[index]
    }
    return array
}

print(copyArray(
    new Array(1, 2, 3, 4, 5),
    new Array()
))
// => [1, 2, 3, 4, 5]
print(copyArray(
    new Array(1, 2, 3, 4, 5),
))
// => [1, 2, 3, 4, 5]
print(copyArray(
    new Array(1, 2, 3, 4, 5),
    new Array(100, 200, 300, 400, 500, 600)
))
// => [1, 2, 3, 4, 5, 600]
print(copyArray(
    new Array(1, 2, 3, 4, 5),
    new Array(100, 200, 300)
))
// => [1, 2, 3, 4, 5]
print(copyArray({},
    new Array(1, 2, 3)
))
// => [1, 2, 3]
print(copyArray(null,
    new Array(1, 2, 3)
))
// => [1, 2, 3]