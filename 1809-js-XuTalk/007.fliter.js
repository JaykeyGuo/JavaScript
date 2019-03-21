const print = console.log

function filter(array, condition) {
    let index = -1
    let resIndex = 0
    const length = array == null ? 0 : array.length
    const result = []

    while (++index < length) {
        const value = array[index]
        if (condition(value, index, array)) {
            result[resIndex++] = value
        }
    }
    return result
}

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false }
]

print(filter(user, ({ active }) => active))

const scores = [100, '90', '88', 97, 99]
print(filter(scores, (item) => item === + item)) 