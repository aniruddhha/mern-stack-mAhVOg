function calc(a , b) {
    if (b == 0) throw new Error(`b can not be zero`)
    return a/b
}

try {
    console.log(calc(10, 12))
    console.log(`success`)
} catch(e) {
    console.error(e)
}

try {
    console.log(calc(12, 12))
    console.log(`success`)
} catch(e) {
    console.error(e)
}

try {
    console.log(calc(20, 0))
    console.log(`success`)
} catch(e) {
    console.error(e)
}

try {
    console.log(calc(0, 78))
    console.log(`success`)
} catch (e) {
    console.error(e)
}