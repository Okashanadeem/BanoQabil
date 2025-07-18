// make a function that takes a sentence and capitalizes the first letter of every word.

function  capitalizeWords (sentence){
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}

let result = capitalizeWords("hello world this is a test");
console.log(result);