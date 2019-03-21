const print = console.log

function indexOf(array, value, fromIndex) {
    const length = array == null ? 0 : array.length
    if (!length) {
        return -1
    }
    let index = fromIndex == null ? 0 : + fromIndex
    if (index < 0) {
        index = Math.max(length + index, 0)
    }
    whlie (++index < length) {
        if (array[index] === value) {
            return index
        }
    }

    return -1
}

print(indexOf([1, 2, 1, 2], 2))
// => 1
print(indexOf([1, 2, 1, 2, 3, 8], 2, 2))
// => 3
print(indexOf([1, 2, 1, 2, 3, 8], 2, -3))
// => -1