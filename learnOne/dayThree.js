//1. polyfill : custom những phương thức khi các trình duyệt cũ không được hỗ trợ.

//2. object.

let myEmail = "email"

let myInfor = {
    name: "minh chau",
    age: 26,
    // getAge: ()=>{

    //     return myInfor.age
    // },
    listFriend: [
        "minh", 2],

    "my-address": "Quang ngai",
    [myEmail]: "daominhchau18@gmail.com"
}

// c1 
console.log(myInfor.name);


// c2
console.log(myInfor["my-address"]);

// 3. object constructor
function User(firstName, lastName, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.getName = () => {
        return `${this.firstName} ${this.lastName}`
    }
}

// 4. object prototype

let auth = new User("nguyen", "han", "quang ngai")


// auth.age = 20
console.log(auth);
// User.prototype.age = 20

console.log(auth);

// 4. lệnh rẽ nhánh if
if (condition) {

} else {

}

// 5. lệnh rẽ nhánh switch

const object = {
    name: "minh chau"
}

object.name = 20

console.log(object);


let date = 2
switch (date) {
    case 2:
        console.log("hom nay la thu 2");

    case 3:
        console.log("hom nay la thu 3");

    case 4:
        console.log("hom nay la thu 4");

    default:
        console.log("khong co case nao");
        break;
}



// Toán tử 3 ngôi
let a = 10
let result = a > 0 ? "a lon hon 0" : "a nho hon 0"
// if ( a > 0) {
//     console.log("a lon hon 0");
// }else{
//     console.log("a nho hon 0");
// }

console.log(result);

// 8. vòng lặp for
let test = 10;
for (let i = 1; i <= test; i++) {

    console.log(i);

}


// for in (duyệt qua lấy các key)
const inForUser = {
    name: "minh chau",
    age: 20
}

const arrayStudent = ["minh", "hoang", "nguyet", null]

for (propety in arrayStudent) {
    console.log(propety);
}

// for of (duyệt qua lấy cá dữliệu value)

const numberArray = [1, 3, 4, 3, 2, "nhan"]

//["minhchau", 20]
for (value of numberArray) {
    console.log(value);
}

// The forEach() method executes a provided function once for each array element.

const fruit = ["cam", "chanh", "xoai", "buoi", "me"]

//console.log(fruit.includes("mit"));


let result2 = fruit.forEach((element, index) => {
    console.log("element: ", element, " - index: ", index);

})

console.log("result2:", result2);





//map

let kq = fruit.map((item, index) => {

    return (item + " trai")
})

console.log(kq);






const user = [
    { name: "minh chau", age: 20 },
    { name: "minh hoa", age: 2 },
    { name: "minh khoi", age: 3 },
    { name: "minh khanh", age: 4 },
    { name: "minh quang", age: 5 },
]
// let avgAge = 0
// let sum = 0
// // ++a va a++
// user.forEach((element, index) =>{
//     sum += element.age
//     // sum = sum + element.age
//     avgAge = sum /(index+1)
// })



//map 
let sum = 0
let avAge
user.map((element, index) => {

    sum += element.age
    // sum = sum + element.age
    avAge = sum / (index + 1)
})
console.log("check: ", avAge);

// 9. vòng lặp while và do while

// let i = 0

while (i < 10) {

    console.log(i);
    i++
}



// do while
let i = 0

do {
    console.log(i);
    i++
} while (i < 10);

//( cường và trà.)



// 10. break and continue

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        //  continue
        break
    }
    console.log(i);
}


// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }

// array method

// 11. find
/*
The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

If you need the index of the found element in the array, use findIndex().
If you need to find the index of a value, use indexOf(). (It's similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
If you need to find if a value exists in an array, use includes(). Again, it checks each element for equality with the value instead of using a testing function.
If you need to find if any element satisfies the provided testing function, use some().

*/



const found = array1.find(element => element < 12);

console.log(found);



//

function name(params) {

}

const name = () => {

}
// 12. filter : The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

const array1 = [16, 12, 8, 5, 130, 44];

const filterResult = array1.filter(item => {
    if (item < 12) {
        return item
    }
})
console.log(array1);
console.log(filterResult);


// 13. some

const check = array1.some(item => item === 6)
console.log(check);


// 14. The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const checkEvery = array1.every(item => item < 125)
console.log(checkEvery);


// 15 reduce()

const sumOne = array1.reduce((previousValue, currentValue) => {
    let sum = previousValue + currentValue
    return sum
}, 0)

console.log(sumOne);

// include()



let resul = array1.includes(20)

console.log(resul);




// bài tập bảng cửu chương

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const inBangCuuChuong = (array) => {
    array.forEach(element => {
        for (let i = 1; i <= 10; i++) {
            let tich = element * i
            console.log(`${element} x ${i} = ${tich}`);
            // console.log(element + " X " + i + " = " + tich);
        }
        console.log("-------------------");
    })

}
inBangCuuChuong(arrayNumber)




//declare function
function name(params) {

}
//arrow function
const arrow = () => {

}
// express function 

const express = function () {

}



/* Bài 7: cho mảng arrayNumber = [ 1, 2, 4, 7, 8] . 
sử dụng forEach() duyệt qua các phần tử và  in ra tổng của 
 các  phần từ trong mảng. */


let sum1 = 0
arrayNumber1.forEach((element, index) => {
    // sum1 += element
    sum1 = sum1 + element
})

//console.log(sum1);
const arrayNumber1 = [1, 2, 4, 7, 8]
let sum2 = 0
let resultt = arrayNumber1.map((item, index) => {

    sum2 += item
    return sum2;
})

console.log(resultt);
// kiểm tra số nguyên tố
const number = 32
const checkPrimeNumber = (number) => {
    if (number === 1) {
        return false;
    }
    let check = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            check = false;
            break;
        }
    }
    if (check) {
        console.log("số nguyên tố");
    }
    else {
        console.log("không phải số nguyên tố");
    }
}

// function checkPrimeNumber(number) {
//     if (number === 1) {
//         return false;
//     }
//     let check = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//           check = false;
//             break;
//         }
//     }
//     if (check) {
//        console.log("số nguyên tố");
//     }
//     else {
//         console.log("không phải số nguyên tố");
//     }
// }

checkPrimeNumber(number)




// console.log(checkPrimeNumber(number) ? `${number} là số nguyên tố` : `${number} không phải là số nguyên tố`);


// declare function
function myNhan(params) {

}

// arrow function 

const myNhan = () => {

}