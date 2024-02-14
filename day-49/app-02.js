const validateEmail = (email) => {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

console.log(validateEmail('ab')) // false
console.log(validateEmail('ab.')) // fasle
console.log(validateEmail('ab@dd.com'))
console.log(validateEmail('ab233@cc.in'))


// complete this code
function validateMobile(mobile) {
    return true
}