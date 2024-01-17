
function checkResult1(marks) {
    if(marks >= 40) {
        return "pass"
    } 
    return "fail"
}

function checkResult2(marks) {
    return (marks >= 40) ? "pass" : "fail"
}

const res = checkResult2(20)
console.log("You are " + res)



