const arr = ["abc", "aac", "pqr", "lmn", "xyz", "ppp", "pet", "xrt", "pop"]
console.log(arr)

const filtered1 = arr.filter( function(el) {
    return el.includes('a')
} )


console.log(filtered1)

const filtered2 = arr.filter( el => el.includes('a') )

console.log(filtered1)