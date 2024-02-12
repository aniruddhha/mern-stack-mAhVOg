// check given string is vowel or not
const txt1 = "abc"
const rgx1 = /[aeiou]/ // matches any vowels
console.log(rgx1.test(txt1))

// match 3 'a's in give string
const txt2 = 'jkaaadfhasklfjh'
const rgx2 = /a{3}/
console.log(rgx2.test(txt2))

// check if given string is cat or dog
const txt3 = 'cat'
const rgx3 = /cat|dog/
console.log(rgx3.test(txt3))

const txt4 = 'The quick. akjfaskjfaksdfh fox'
const rgx4 = /(brown) fox/
const mtc = txt4.match(rgx4)
console.log(mtc)


const txt5 = 'Start of the line'
const rgx5 = /^Start/
console.log(rgx5.test(txt5))