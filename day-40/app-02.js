
const arr1 = ['abc', 'pqr', 'lmn', 'ayx']
console.log(typeof arr1)
console.log(arr1)

const arr2 = new Array(1, 2, 3, 4, 5)
console.log(typeof arr2)
console.log(arr2)

console.log('Total Element : ' + arr1.length)
console.log('0th Element : '+arr1[0])
console.log('1st Element : '+arr1[1])
console.log('2nd Element : '+arr1[2])
console.log('3rd Element : '+arr1[3])

console.log('' + arr1[5])


function summation(arr) {

    let sum = 0

    for (let n = 0; n < arr.length; n++) {

        sum = sum + (Math.pow(arr[n], 2))
        // sum = sum + (Math.pow(n, 2))
    }

    return sum
}

// 0 -> sum = 0 + (1 ^ 2) = 1
// 1 -> sum = 1 + (2 ^ 2) = 5
// 2 -> sum = 5 + (3 ^ 2) = 14
// 3 -> sum = 14 + (4 ^ 2) = 30
// 4 -> sum = 30 + (5 ^ 2) = 55
// 5 -> sum = 55 + (6 ^ 2) = 91


console.log('Summation is ' + summation(arr2))