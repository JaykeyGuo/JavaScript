const print = console.log

function innerGetValue(object, path) {
    let index = 0
    const length = path.length
    while (object != null && index < length) {
        object = object[`${path[index++]}`]
    }
    return (index && index == length) ? object : undefined
}

function getValue(object, path, defaultValue) {
    const result = object == null ? undefined : innerGetValue(object, path)
    return result == undefined ? defaultValue : result
}


print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c']));

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 0, 'b', 'c']));

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 1, 'b', 'c']));

print(getValue({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', 1, 'b', 'c'], 0));

print(getValue({ a: { b: { c: 1 } } }, ['a', 'b', 'c']));

print(getValue({ a: { b: { c: 1 } } }, ['a', 'b', 'c'], 0));