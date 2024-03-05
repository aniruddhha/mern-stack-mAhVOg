const prm1 = new Promise( (resolve, reject) => {
    // simulation of connecting to fb
    // setTimeout(() => resolve('success'), 1000)
    setTimeout(() => reject('🔴 fail'), 1000)

} ) // success ,fail

prm1.then( msg => console.log(msg))
    .catch(err => console.log(err))

console.log('I am regular code')