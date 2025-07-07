//  arrow function

const func = () => {
    console.log("hello func")
}
func()

// input [1,2,3]
// output [1,4,9]

const arr = [1, 2,3];
const newArr = [] 

const square = arr.map((num) =>{   
    return num*num;
})

newArr.push(square)
console.log("Square value:",square )
