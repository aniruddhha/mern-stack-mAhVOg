const arr = [ 1, 3, 1, 4, 89, 12, 2 ]

// for (let i = 0; i< arr.length; i++) {
//     console.log(arr[i])
// }

arr.forEach(function(el, ind) {
    console.log('Element ' + el + ' Ind '+ ind)
})

arr.forEach( (el, ind) => console.log('Element ' + el + ' Ind '+ ind) )