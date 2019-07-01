
//String length
let firstString =`this is first string`
let secondString =`this is second string`

console.log(firstString.length) 

//Accessing Characters
let text=`good day!`

// the first character
console.log(text[5]) 

console.log(text.charAt(0)) 
console.log(text[text.length - 1])

let say = `Hey there!`

alert(say[1000])
for (let char of `Hey there!`) {
  alert(char) 
}


//Strings are Immutable

const text1 = 'Hey'

const newText1 = 'h' + text1[1] // create a new string

console.log(newText1)

//Changing the Character Case

console.log('Hello'.toUpperCase()) // HELLO
console.log('Hello'.toLowerCase()) // hello

//Searching for a Substring

const text2 = 'Hello World ello'

console.log(text2.indexOf('Hello')) // 0, 'Hello' is found at the beginning
console.log(text2.indexOf('hello')) // -1, not found, the search is case-sensitive

console.log(text2.indexOf('World')) // 6
console.log(text2.indexOf('ello')) // 1, 'ello' is found first at the position 1, inside 'Hello'

const text3 = 'Hello World ello'

console.log(text3.indexOf('ello', 2)) // 12

//includes, startsWith, endsWith

console.log('How is it going'.includes('going'))

console.log('Hey there'.includes('Bye')) 

console.log('How'.includes('How')) 
console.log('How'.includes('How', 3)) 
console.log('Going'.startsWith('Goi')) 
console.log('Going'.endsWith('ing')) 

//Special characters

let guestList = 'Guests:\n * Caca\n * Ratu\n * Riska'

console.log(guestList) 

console.log('Hey \nthere') 

console.log(`Hey
there`)

console.log('"He said very good", she said.')

console.log(`The backslash: \\`)

//toString(base)

const age = 20

console.log(age.toString())

//toFixed 
const num = 12.34
console.log(num.toFixed(1))

//toFixed
const num = 12.34
console.log(num.toFixed(1))

const num = 12.36
console.log(num.toFixed(1))

const num = 12.34
console.log(num.toFixed(5))

//JavaScript Global Objects Math
//parseInt and parseFloat
console.log(parseInt('100px')) // 100
console.log(parseFloat('12.5em')) // 12.5

console.log(parseInt('12.3')) // 12, only the integer part is returned
console.log(parseFloat('12.3.4')) // 12.3, the second point stops the reading

//Math.random()
alert(Math.random())

//Math.max(a, b, c...) / Math.min(a, b, c...)
alert(Math.max(3, 5, -10, 0, 1)) 
alert(Math.min(1, 2))

//Math.pow(n, power)
alert(Math.pow(2, 10))
