
function implicitConversion() {
    var num1 = 10
    console.log(typeof num1)
    num1 = '' + num1 // implicit conversion
    console.log(typeof num1)
}

// implicitConversion()

function explicitConversion() {
    var num2 = 10
    console.log(typeof num2)
    num2 = String(num2)
    console.log(typeof num2)
}

// explicitConversion()

function numberConversion() {
    var num1 = '203'
    console.log(typeof num1)
    var num2 = '10'
    console.log(typeof num2)
    console.log(num1 + num2)

    num1 = Number(num1)
    console.log(typeof num1)
    num2 = Number(num2)
    console.log(typeof num2)

    console.log(num1 + num2)
}

function nonNumberConversion() {
    var num1 = 'aaa'
    console.log(typeof num1)

    num1 = Number(num1)
    console.log(num1) // NaN
}

function booleanConversion() {
    var str = 'sdflkslkjslkgf'
    console.log(typeof str)
    var isOkay = Boolean(str) // what it is doing internally ?
    console.log(typeof isOkay)
    console.log(isOkay)
}

// booleanConversion()

function numberConversionParsing() {

    var num = '10'

    var age = parseInt(num)
    console.log(typeof age)
    console.log(age)

    var sal = '123.780'
    var empSal = parseFloat(sal)
    console.log(empSal)
}

numberConversionParsing()