const obj = {
    age : 30,
    flNm : 'abc pqr',
    _password: 'zxv',

    get seePassword() {
        console.log(this)
        return this._password // what is this this ? we will have seperate session
    },

    set newPassword(ps) {
        this._password = ps
    }
}

console.log(obj.age)
console.log(obj._password)
console.log(obj.flNm)
console.log(obj.seePassword)
obj.newPassword = 'iusdhf7'
console.log(obj.seePassword)