 function multiply(a,b) {
 return a*b   
}

function getRandom(num) {
return Math.floor(Math.random()*num);
}


function convertToString(num) {
if(isNaN(num)){
    return 'NaN'
}
else{
    if(num === 42){
        return'the meaning of life and the universe'
    }
    else {
        return num.toString()
    }
}
}


function reverse(text) {
   return  text.split("").reverse().join("")
}


function countSyllables(text){
if (!text){
    return 0
}

return text.split("-").length
}

export {
    multiply,getRandom,convertToString,reverse,countSyllables
}