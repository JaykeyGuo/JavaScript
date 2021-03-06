const print = console.log

function chunk(array, size) {
    size = Math.max(size, 0)
    const length = array == null ? 0 : array.length

    if (!length || size < 1) {
        return []
    }

    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))

    while (index < length) {
        result[resIndex++] = array.slice(index, (index += size))
    }
    return result
}

print(chunk(['a', 'b', 'c', 'd'], 2))
// => [['a', 'b'], ['c', 'd']]
print(chunk(['a', 'b', 'c', 'd'], 3))
// => [['a', 'b', 'c'], ['d']]
