console.log(`Start`)
setTimeout(() => console.log('Middle'), 100) // it will be processed but not executed immidiately
console.log(`End1`)
console.log(`End2`)
console.log(`End3`)
console.log(`End4`)

for(let i = 0 ; i < 100; i++) {
    console.log('ending')
}
