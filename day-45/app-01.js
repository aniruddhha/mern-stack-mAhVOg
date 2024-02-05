const arr1 = [ 1, 2, 3 ,1 , 1, 2 ,3 ]
console.log(arr1)

const arr2 = new Set([ 1, 2, 3 ,1 , 1, 2 ,3 ])
console.log(arr2)
console.log(arr2[2])
console.log(arr2.has(100))

arr2.forEach( el => console.log(el) )

arr2.delete(1)
console.log(arr2)

arr2.clear()
console.log(arr2)

// console.log(arr2.keys())
// console.log(arr2.value())
// arr2.entries()