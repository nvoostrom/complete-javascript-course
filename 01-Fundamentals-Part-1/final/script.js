/*
create variable
let js = 'amazin';

//create alert for js
// if (js === 'amazing') {
//     alert('javascript is fun');
// } else {
//     alert('you are wrong');
// }

//write to console
console.log(40 + 8 + 23 - 10);
console.log('9 + 9 =', 9 + 9);
console.log('Johas')
console.log(23)

//creat variables
let firstName = "Matilda"
let prefix = "the"
let lastName = "Greate"

//write to console
console.log(firstName + " " + prefix + " " + lastName)
console.log(firstName + " " + prefix + " " + lastName)
console.log(firstName + " " + prefix + " " + lastName)

//best practis is not to use one word to descripe variable in this axaple chage is to let firstName = "bob"
let name = "Bob"

//you can aslo use snakecase like this to make variable, best practice in js is use camle case
let first_name = "lee"

//cant make variable like this
// let new = "new product"
// let function = "function created"
// if you want to use new or function you can chose to add a _,$ or any other letter (not recomended)

let $function = 'function created'

//all upper case for thigns you know wont change
let PI = 3.1415;

//be descriptive like the first two. dont use the second option
let myFirstJob = "Programmer"
let myCurrentJob = "Teacher"

let job1 = "Programmer"
let job2 = "Teacher"

console.log(myFirstJob)
*/


/*
Number datatype
let numberDataType = 1234
//Stirng datatype
let stringDataType = "String"
//Boolean datatype
let booleanDataType = true
//Undefined dataType
let undefinedDataType
//Null datatype

//Symbol datatype

//BigInt datatype

//value is a type. the variable is NOT a type

let javascriptIsFun = true
console.log(javascriptIsFun)
// use type of to see what datatype it is
console.log(typeof true)
console.log(typeof 23)
console.log(typeof 'String')

//resign a varialbel. this is posible because javascripts dynamic typing see line 70
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)

let year;

console.log(year)
console.log(typeof year)

year = 1999
console.log(year)
console.log(typeof year)

// this is a bug. this returns a object this should retun null. is not being fixed because legecy
console.log(typeof null)
*/

/*
//var is old way of defining variable
var job = 'Programmer'
job = 'Coder'

//let variable can be change/mutated latter in the script
let age = 30
age = 31

//const should and can not change/mutated later on
const birthYear = 2002
// birthYear = 2001
// const job

//best practice always use cont only use let when you sure that is should change

//declare without making variable. it is posible but prefirible dont us is

lastName = 'Oostrom'
console.log(lastName)
*/

/*
//math operators
//defrents kind of opperators

console.log(ageNick)
console.log(ageSara)

console.log(ageNick, ageSara)

// a * means time, / meand devide and ** means to the power of (3 = 2 * 2 * 2)
console.log(ageNick * 2, ageNick / 10, 2 ** 3)

const firstName = "Nick"
const prefix = "van"
const lastName = "Oostrom"
console.log(firstName + " " + prefix + " " + lastName)

//typeof is also a opperator see line 72 to 93

//assigment operators
let x = 10 + 5 // is 15
x += 10 // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x -= 10 // x = x -10 = 90
x++ // x + 1 = 91
x-- // x - 1 = 90
console.log(x)

//comparison opperator
console.log(ageNick < ageSara) // >, <, >=, <=
console.log(ageSara >= 18)

const isFullAge = ageSara >= 18

*/
/*
const now = 2023
const ageNick = now - 2002
const ageSara = now - 2004
console.log(now - 1991 > now - 2002)

console.log(25 - 10 - 5)

let x, y
x = y = 25 - 10 - 5 // x = y = 10, y=10 x=10

console.log(x, y)

const avarageAge = (ageNick + ageSara) / 2
console.log(ageNick, ageSara, avarageAge)
*/

/*
const firstName = 'Nick'
const prefix = 'van'
const lastName = 'Oostrom'
const myCurrentJob = 'junior developer'
const fullName = `${firstName} ${prefix} ${lastName}`
const birthYear = 2002
const curentYear = 2023

const nick = "I'm " + fullName + ', a ' + (curentYear - birthYear) + ' Years old ' + myCurrentJob + '!'

console.log(nick)

const newNick = `I'm ${fullName}, a ${(curentYear - birthYear)} years old ${myCurrentJob}!`

console.log(newNick)

console.log(`just a string with a backtick`)

console.log(`string with \n\
multiple \n\
lines
`)

console.log(`multiple
lines
with backtick`)
*/

/*
if stamnent
const age = 15
if (age >= 18) {
    console.log(`sara is old enogh to drive 🚗`)
} else {
    const yearsLeft = 18 - age
    console.log(`sara  is to young. Wait another 
 ${yearsLeft} Years 😃`)
}

const birthYear = 1920
let century

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`${century}`)
*/