// Calculate the percentage of given marks

var marks = 60
var toatlMarks = 100
var percentage = (marks/toatlMarks) * 100

console.log('You have got '+ percentage)


function calcPerc(mrk, ttlMrk) {
    var per = (mrk/ttlMrk) * 100;
    return per
}

var res = calcPerc(43, 60)
console.log('Your percentage is '+ res)

console.log('Your Percentage is ' + calcPerc(30, 100))
