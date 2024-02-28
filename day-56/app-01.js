const dt1 = new Date()
console.log(dt1)

const dt2 = new Date('2020-01-01')
console.log(dt2)

const str = `
    year : ${dt1.getFullYear()}
    month : ${dt1.getMonth() + 1}
    day : ${dt1.getDate()}

    hour: ${dt1.getHours()}
    minute: ${dt1.getMinutes()}
    seconds: ${dt1.getSeconds()}
`
console.log(str)

dt2.setFullYear(2030)
dt2.setMonth(11)
dt2.setDate(1)
dt2.setHours(12)
dt2.setMinutes(23)
dt2.setSeconds(45)

console.log(dt2)