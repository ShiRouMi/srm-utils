/*
Object.is()
Object.assign()
Object.keys()
Object.values()
Object.entries()
*/

Object.is('foo', 'foo')
// true
Object.is({}, {})
// false

const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

// Object.keys方法，返回一个数组
var obj = { foo: 'bar', baz: 42 };
Object.keys(obj)
// ["foo", "baz"]

// Object.values方法返回一个数组
const obj = { foo: 'bar', baz: 42 };
Object.values(obj)
// ["bar", 42]

// Object.entries()方法返回一个数组
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]