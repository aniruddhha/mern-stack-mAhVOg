function sayHi(msg, emoji) {
    console.log(`Hey ${this.nm}, ${msg} ${emoji}` )
}

const obj = {
    nm : 'abc'
}

const fn = sayHi.bind(obj, 'hello', '🚀')
fn()

function longParms(a, b, c ,d ,e, f) {
    return `a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}, f = ${f}`
}

console.log(longParms(1, 2, 3, 4, 5, 6))

const fnLng = longParms.bind(undefined, 1, 1, 1)
console.log(fnLng(2, 2, 2))

