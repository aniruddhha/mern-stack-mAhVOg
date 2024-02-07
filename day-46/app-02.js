const nm = 'without template literals, if you wanted to return '

console.log(`👉 Length of string is : ${nm.length}`)
console.log(`👉 Uppecase : ${nm.toUpperCase()}`)
console.log(`👉 Lowercase : ${nm.toLowerCase()}`)
console.log(`👉 Char At 2 : ${nm.charAt(2)}`)
const arr1 = nm.split('')
console.log(arr1)

const arr2 = nm.split(' ')
console.log(arr2)

const strFrts = "apple,orange,banana,grape";
const fruits = strFrts.split(',', 1)
console.log(fruits)
