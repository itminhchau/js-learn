// /* Giải thích tiền tố và hậu tố ++a và  a++.*/
// // tiền tố : ++a và --a

// việc 1: + 1 cho a
// viec 2: tra về kết quả sau khi đã cộng
//let output = ++a 

// let a = 6;
// //  a = a + 1
// console.log(++a);

// console.log(a);




// // hậu tố: a++ và a--

// let b = 7;

// let output2 = b++ // b = b+ 1
// console.log("output2:", output2);
// console.log("b:", b);


// // việc 1: copy biến b
// // việc 2 : cộng 1 cho b
// // việc 3: trả về a copy


// /* toán tử logical &&: và  || hoặc   ! phủ định*/



// /* câu lệnh điều kiện if */


let a = 10
let b = 15

if (a > b && a < 0) {
    console.log("a la so lon hon");
}else{
    console.log("b la so lon hon");
}


//  /* '', null, undefined , NaN, 0, false*/  => false

// let result = "A" && "B" && "C" && "E"
// // let result = undefined || null || "C" || "D"

// console.log("result", result);


// if (result) {
//     console.log("co gia tri");
// }else{
//     console.log("khong co gia tri");
// }

// let a = null
// let b = 10
// let c = "oke" 
// if (a && b && c) {
//     console.log("Có giá trị được in");
// }else{
//     console.log("không có giá trị");
// }
//

// let result = "A" && "B" && "c" && "D"

// let result = "" || undefined || null || NaN

// console.log("result" , result);

// if (result) {
//     console.log("co gia tri");
// }else{
//     console.log("không có giá tri");
// }
// console.log("result",result );




// /* Làm việc với chuỗi */



// let result = strOne.length

// console.log(result);



// length : tính độ dài chuỗi  

// // console.log(str.length);

// // find index


console.log(strOne.indexOf("minh",5));

// findex() : không tìm thấy sẽ trả về -1
console.log(str.indexOf("Tra"));

// console.log(strOne.search("minh"));


// slice

let str22 = "welcome to to js class of TienIt"
console.log(str22.slice(2, 5));                                                                                      // truyền một số thì tính từ số đso trở đi, âm thì ngược lại

//replace

//  let str2 = "welcome to to js class welcome of TienIt"
let strOne = "dao welcome welcome chau"
let newStr = strOne.replace(/welcome/g, "minh")
// let newStr = strOne.replaceAll("welcome", "minh")

// // console.log("str2:", str2);
console.log("newStr",newStr);



// upper case và lower case
let str2 = "WELCOME "
console.log(str2.toLowerCase().toUpperCase());
// console.log(str2.toLocaleLowerCase())

// trim 
// 
let str3 = "   welcome to javascript    "

console.log(str3.trim());


// split : convert string -> array

let str4 = "oek oke keo"

console.log(str4.split("k"));

















// // 7: cách tạo mảng 

// let array = new Array(1,2,3,4)


let arrayTwo = [2, "nhan", 3]

console.log(typeof arrayTwo);



// array method
// to string

let result = arrayOne.toString()
console.log( arrayOne);



// join
console.log(arrayOne.join("***"))


// pop ( remove phần tử cuối  và trả về giá trị đã pop) (pop out)
// const fruits = ["chuoi","cam","nhan","thanh long"]
// console.log(fruits.pop());
// console.log(fruits)


//The push() method adds a new element to an array (at the end)
// The push() method returns the new array length:

const fruits = ["chuoi","cam","nhan","thanh long"]
let kq = fruits.push("chanh")
console.log(kq);
console.log(fruits);

// The shift() method removes the first array element and "shifts" all other elements to a lower index. and The shift() method returns the value that was "shifted out":
//The shift() method returns the value that was "shifted out":

//const fruits = ["chuoi","cam","nhan","thanh long"]




//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
//The unshift() method returns the new array length:

// const fruits = ["chuoi", "cam", "nhan", "long"]

const resul = fruits.unshift("mit")

console.log("result", resul);
console.log(fruits);





// concat
// let str = "ho" + "cuong"

let name = "Nguyen ".concat(" Van Nhan")
console.log(name);



const array1 = [2, 3]
const arr2 = ["minh", "thien"]

const arr3 = array1.concat(arr2)
console.log(arr3);



// array sort (sắp xếp)

const sortArray = [2, 8, 3, 11, 20, 100, 31]

// 2, 3, 8, 11,20,31,100

// 100, 11, 2, 20 , 3, 31, 8
sortArray.sort((a,b)=> b - a)

console.log(sortArray);


















//declare function
function name(params) {

}


function sum(a, b) {

    return a + b
}


console.log(sum(5, 6));

// arrow function
const getName = (a, b) => {
    return a + b
}
console.log(getName(5, 6));

// // express fuction

const expressNhan = function () {

}

// //arrow funciton
// //block scope

//  const sum = (a , B) =>{
//      var tong = a + B
//      return tong
//  }

//  console.log("sum", tong2);


//  sum(5,10);

// // express function

// const express = function(a , b){
//  return a + b
// }

// console.log(express(1,2));
