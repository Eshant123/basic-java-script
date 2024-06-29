const myArray=[1,2,3,4,7,8,9]
// console.log(myArray[4])
// myArray.push(7)
// myArray.push(8)
// myArray.pop()
// myArray.pop()
// myArray.unshift(0)
// myArray.unshift(1)
// myArray.shift()
// console.log(myArray)
// console.log(myArray.includes(2))
// console.log(myArray.indexOf())
// const mynewArray=myArray.join()
// console.log(mynewArray)
// console.log(typeof mynewArray)
// console.log(myArray)

const mn1=myArray.slice(1,4)
console.log("a",myArray)
console.log(mn1)
const mn2=myArray.splice(1,4)
console.log("b",myArray)
console.log(mn2)

var arr1=["C","C++","Python"];  
var arr2=["Java","JavaScript","Android"]; 
// arr1.push(arr2) 
// console.log(arr1)
// const result=arr1.concat(arr2)
// console.log(result)
const result1=[...arr1,...arr2]
console.log(result1)
//spread opreteor use for two or more arryas concat

console.log(Array.isArray(arr1))
const string="hitesh"
console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"));
//Array.of


