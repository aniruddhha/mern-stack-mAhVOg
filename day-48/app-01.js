// write the code to check if this sentence contains quick word
const msg1 = 'The quick is red'
const regex1 = /quick/
console.log(regex1.test(msg1))


// i need how many digits are there, in give string. 
// first check are there any digit is string 
const msg2 = 'abc123'
const regex2 = /\d+/
console.log(regex2.test(msg2))
const regex3 = /\d/g
const arr = msg2.match(regex3)
console.log(arr.length)
