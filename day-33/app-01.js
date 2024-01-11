function print(msg) {
    console.log(msg)
}

var num1 = 10
console.log(num1)

var isOkay = false
console.log(isOkay)

var fn = print // varible is having value with type function, not a call
console.log(fn)

print('Hi, js') //  call
fn('Hi, js ->')

