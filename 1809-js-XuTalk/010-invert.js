const print = console.log

function invert(object) {
    const result ={}
    Object.keys(object).forEach((key) => {
        let value = object[key]
        result[value] = key
    })
    return result
}

const object = { 'a': 1, 'b': 2, 'c': 3, 'd': { x: 1} }
print(invert(object))

object['d'].toString = null
print(invert(object))

const toString = Object.prototype.toString

function invert(object) {
    const result = {}
    Object.keys(object).forEach((key) => {
        let value = object[key]
        if (value != null && typeof value.toString != 'function') {
            value = toString.call(value)
        }
        result[value] = key
    })
    return result
}