// all of below are valid strings
const nm1 = 'abc'
const nm2 = '1242r53'
const nm3 = '%^#%$#%'
const nm4 = "ajkhf87"
const nm5 = "        "

// es6 - new way to write string
const a = 10
const b = 20
const txt = `abc` // what is the difference

const msg1 = 'A is ' + a + ' B is ' + b // concatenation
console.log(msg1)

const msg2 = `A is ${a} and B is ${b}` // interpolation
console.log(msg2)

const msg3 = `A is ${a * 34} and B is ${b * 12}`
console.log(msg3)

// multiline strings
const para = ` ab 
    pqr
    lmn
    xyz
    this is multiline string
`
console.log(para)