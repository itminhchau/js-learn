// var 
// let
// const 

// var name = "chu dung"
// var name = "minh chau"

// var age = 20
// block scope
let age = 0
if (true) {
    age = 20 + 1
}

console.log(age);

// tham trị

// string , number, boolean , null, undefined

let a = 10
let b = a
a = 15

console.log(b);

// tham chiếu

// array
let array = [2, 3, 5, 6, 7]

// object : key, value
// dia chi : 2EF
let object = {
    myName: "minh chau",
    age: 20
}

let bObject = {
    ...object
}

bObject.myName = "chu dung"

console.log(bObject);