function print() { // named function

}

var fn1 = print 
fn1()
print()

var fn2 = function(msg) { // anonymous function
    var step1 = ' $ ' + msg
    var step2 = step1 + ' * '
    return step2
    // return ' $ ' + msg  + ' * '
}

var fn3 = print // bracktes are missing, it is not a call
var res = fn2('abc') // it is call
console.log(res)