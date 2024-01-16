const a = 20

if(true) {
    console.log('Entered in if condition')
    const a = 30 // in let, scope of a is limited to curly bracktes
    console.log(a)
}

console.log(a)