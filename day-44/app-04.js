const arr = [ -1, 2, 3, 4, 5 ]

console.log('🟢 Original 🟢')
console.log(arr)

const sum = arr.reduce( (acc, cv) => acc + cv, 10 )
console.log(sum)