let result
let userInput 
let check

function oddNumber(bil){
    result = bil % 2 != 0 
    check = result ? "true" : "false";
    return check
}

console.log("Hasilnya: " + oddNumber(2))


function evenNumber(bil){
    result = bil % 2 == 0 
    check = result ? "true" : "false";
    return check 
}

console.log("Hasilnya: " + evenNumber(2))

function reverseString(str) { 
    result =  str.split('').reverse().join('')
    return result 
} 

console.log("Hasilnya: " + reverseString('hello'))


function upperString(str) { 
    result =  str.toUpperCase();
    return result 
} 

console.log("Hasilnya: " + upperString('age'))
  

function cirle(r) { 
    result =  Math.PI * r * r
    return result 
}

console.log("Hasilnya: " + cirle(6).toFixed(4))

