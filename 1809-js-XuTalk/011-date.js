const print = console.log

function mapObject(object, iteratee) {
    const props = Object.keys(object)
    const result = new Array(props.length)

    iteratee || (itertee = value => value) 

    props.forEach((key, index) => {
        result[index] = iteratee(object[key], key, object)
    })
    return result
}

const obj = {a: 1, b: 2}

print(mapObject(obj))

print(mapObject(obj, (value) => {
    return value
}))

print(mapObject(obj, (value, key) => {
    return key + value
}))