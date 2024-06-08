function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i], i, collection);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i], i, collection));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
    if (acc === undefined) {
        acc = values[0];
        startIdx = 1;
    }
    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], i, collection)) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i], i, collection)) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    return values.length;
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n);
    }
}

function myKeys(object) {
    const keys = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(object) {
    const values = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            values.push(object[key]);
        }
    }
    return values;
}