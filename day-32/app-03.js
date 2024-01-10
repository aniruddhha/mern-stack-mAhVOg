// i want to make square of a number

var n1 = 10
var sq1 = n1 * n1
console.log('Square of '+ n1+' ' + sq1)

var n2 = 20
var sq2 = n2 * n2
console.log('Square of '+ n2+' ' + sq2)

function sqr(n) { // parameter
    return n * n // return
}

var sq = sqr(10) // call 
console.log('Square is '+ sq)

sq = sqr(23)
console.log('Square is '+ sq)


