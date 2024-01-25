const arr = [ 'abc', 'pqr', 'lmn', 'xyz' ]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

const twdArr = [
    ['abc', 'lmn'],
    ['xyz', 'vvv']
]

console.log('🟢 Two Dim Array')
for(let i = 0 ; i < twdArr.length; i++) {
    // console.log(twdArr[i])
    for (let j = 0; j < twdArr[i].length; j++) {
        console.log(twdArr[i][j])
    }
}