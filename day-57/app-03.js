function calc(a , b) {
    if (b == 0) throw new Error(`b can not be zero`)
    return a/b
}


try {
    calc(10, 2)
    console.log(`success`)
} catch(e) {
    console.log(`🔴 Error Occured 🔴`)
    console.error(e)
} finally {
    console.log(`🟢 finally executed 🟢`)
}