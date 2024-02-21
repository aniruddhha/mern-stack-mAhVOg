function sayHi(msg, emoji) {
    console.log(`Hey ${this.nm}, ${msg} ${emoji}` )
}


const obj = { 
    nm : 'abc'
}


sayHi.call(obj, 'hello', '🚀')
sayHi.apply(obj, ['hello', '🚀'])