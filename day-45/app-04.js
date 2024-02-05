const map = new Map()
map.set('name', 'abc')
map.set('os', 'android')
map.set('version', 12)
map.set('oem', 'moto')

console.log(map)

const map1 = new Map([
    [1, 'abc'],
    [2, 'pqr'],
    [3, 'xyz'],
    [4, 'lmn'],
    [5, 'abc'],
    [2, 'ppp'],
    [4, 'QQQ']
])
console.log(map1)

map1.forEach((v, k) => console.log('Key ' + k + ' Value '+v))

console.log('value at 2 ' + map1.get(2))

const vals = map.values()
console.log(vals)

const keys = map.keys()
console.log(keys)

console.log('Entries Code')
const entries = map.entries()
while(true) {
    const nxt = entries.next()
    if(nxt.done) break
    console.log(nxt.value)
    console.log('key ' + nxt.value[0] +' Value ' + nxt.value[1])
}