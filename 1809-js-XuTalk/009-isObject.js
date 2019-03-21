const print = console.log

function isObject(value) {
    const type = typeof value
    return value != null && 
        (type == 'object' || type == 'function')
}

print(isObject({}))

print(isObject(new Number(1)))

print(isObject([1, 2]))

print(isObject(new Boolean(false)))

print(isObject(new String('hello, js')))

print(isObject(function () { }))

print(isObject(null))

print(isObject(1))

print(isObject(false))

print(isObject('hello, js'))

print(isObject(undefined))