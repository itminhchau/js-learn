const user = [
    {
        id: 1,
        name: "nguyen van A",
        age: 20,
        address: "viet nam"
    },
    {
        id: 1,
        name: "nguyen van A",
        age: 20,
        address: "viet nam"
    },
    {
        id: 1,
        name: "nguyen van A",
        age: 20,
        address: "viet nam"
    },
    {
        id: 1,
        name: "nguyen van A",
        age: 20,
        address: "viet nam"
    },
    {
        id: 1,
        name: "nguyen van A",
        age: 20,
        address: "viet nam"
    },
    {
        id: 1,
        name: "nguyen van A",
        age: 20,
        address: "viet nam"
    },
]


const json = '{"name": "tra"} '

console.log(JSON.stringify(json));


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhttp.send();


let myArray = [2, 4, 5, 6, 7]

// let a, b, rest
// [a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

let obj = {
    name: "chau",
    age: 20
}

let objb = obj

objb.name = "son"

console.log(obj);




console.log(newArray);


//api là gì

function myName(callback) {
    callback("nguyen canh thien")

}

function callback(a) {
    console.log(a);
}


myName(callback)

const str = { name: "minhchau" }
console.log(JSON.stringify(str));

// Destructuring assignment

const myArrayOne = ["hoang", "tra", 1, 2]

// console.log(myArrayOne[0]);
let a, b, c, d, rest
[a, b, ...rest] = myArrayOne

//push
let myArrayTwo = [0, ...myArrayOne, 5]
console.log(myArrayTwo);

// tham trị

let e = 10;

let h = e;

e = 12

console.log(h);

// string, number, boolean, null 

// tham chiếu

//object, array, function


//1E2F

// let object2 = object // 1E2F

// object.name = "Cuong"

// console.log(object2.name);


// Destructuring Assignment
let object = {
    name: "tra",
    age: 20
}
let object3 = {
    ...object,
    name: "cuong",
    address: {
        ad1: "quang ngai",
        ad2: "quang nam"
    }
}

console.log(object3.name + "-" + object3.age);

const { name, age, address: { ad1, ad2 } } = object3

console.log(`${ad1} ----- ${ad2}`);
//cuong: "tra"
//tra: "tra"
// state 


// Destructuring Assignment

// /post/1 : path params
// /post? postId = 2: query param

// body.


// json : một định dạng dữ liệu dạng chuôi nó thể hiện các kiểu
// dữ liệu như là string,number, null, object , array

let jsons = '["minhchau",2,2]'

console.log(jsons);
//



// json là một định dạng dữ liệu dạng chuỗi, ( thể hiện các kiểu dữ liệu
// String, object , array, number , bolean)

let jsonss = { "name": "van nhan" }
console.log(JSON.stringify(jsonss));


// status 200: response success ( data trả về thành công)
// status 201: created (create or update success)
// status 404 : not found (url error : sai url)
// status 500 : error from server ( lỗi server : là lỗi của backend)



// forEach

const array = [2, 33, 62, 2, 351, 6]

let sum = 0
array.forEach((element, index) => {
    console.log("element: ", element, "index: ", index);
    sum += element
    console.log("tong: ", sum);
});

//map

const arrayNumber = [2, 33, 62, 2, 351, 6]

let newArray = []
newArray = arrayNumber.map((element, index) => {
    let mt = element * 2
    console.log("đã nhân lên", mt);
    return mt
})

console.log(newArray);



const students = [
    {
        myName: "Alice", score: 85
    },
    {
        myName: "Bob", score: 72
    },
    {
        myName: "Carol", score: 90
    },
];

console.log("objec: ", students[1].myName);

const object2 = {
    myName: "minhchau"
}

console.log(object2[myName]);

let sum2 = 0
students.forEach((item, index) => {
    console.log("index: ", index);
    sum2 += students[index].score
})

let avg = sum2 / students.length

console.log("trung cong: ", avg);