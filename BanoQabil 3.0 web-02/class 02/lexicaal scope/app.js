// Global scope 
let globalVar = "I am global";

// trying in if-else 
if (true){
    console.log(globalVar)
}else{
console.log("hello")
}

// trying in function 
function myfunc1 (){
    console.log(globalVar)
}
myfunc1()


// local 
function myfunc2 (){
    let localVar = "I am Local"
}
/*
//YOU WILL SEE AN ERROR IF TOU UN-COMMENT IT
console.log(localVar)
*/

// block scope 
let myfunc3 = () => {
    
    if(true){
    let blockScope = "I am a block Scope"
    }else {
    console.log("hi")
    }
//now try to access the BLOCKSCOPE  variable from the if-else inside this fuction 

/*
console.log(blockScope)
*/
// there is an error if you want to see then uncomment it
}

// calling the fuction 
myfunc3()