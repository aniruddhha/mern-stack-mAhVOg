console.log(Math.PI)
console.log(Math.sqrt(4))

for(let i = 0 ; i < 10; i++)
    console.log(Math.random())  

console.log(`Square of 2 : ${Math.pow(2,2)}`)

const num = 10 / 0
console.log(num)

console.log(Math.max(1, 67, 0, 23))
console.log(Math.max.apply(null, [1, 67, 0, 23]))