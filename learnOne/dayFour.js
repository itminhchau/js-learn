
// callback function


function myFuction(myCallBack) {
    myCallBack("chau")

}

function myCallBack(name) {
    console.log(name);
}

// thực thi argument
myFuction(myCallBack)


setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);

    }, 1000);

}, 1000);

//
const arrayCheck = [1, 2, 3, 4]

let element = (item, index) => {

}
arrayCheck.map(element)

// 



animal.forEach((item, index) => {
    console.log(item);
})

const sum = (a, b) => {
    return a + b
}

let Tong = sum(1, 2)

console.log(Tong);



// ví dụ 2:
const animal = ["dog", "chicken", "bird", "pig"]

Array.prototype.mapCustom = function (callback) {
    let newArray = [], arrayLenght = this.length
    for (let i = 0; i < arrayLenght; i++) {
        // callback(this[i],i)
        let result = callback(this[i], i)
        newArray.push(result) // modifie
    }
    return newArray
}


//express function
let htmls = animal.mapCustom((item, index) => {
    return (
        `<div>${item}</div>`
    )

    // console.log(item, index);
})
let real = animal.map((item, index) => {
    return (
        `<div>${item}</div>`
    )

    // console.log(item, index);
})
console.log(real);
console.log(htmls);


// callback hell


setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
            setTimeout(() => {
                console.log(4);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);


// promise: 



//sync : đồng bộ
// async: bất đồng bộ


console.log(1);
setTimeout(() => {
    console.log(2);
}, 1000)
console.log(3);
//excutor function

let myPromise = new Promise((resolve, reject) => {
    try {
        let sum = x + 1
        setTimeout(() => {
            resolve([{
                nameCourse: "js"
            },
            {
                nameCourse: "python"
            }, {
                nameCourse: "java"
            },
            ])
        }, 3000);

    } catch (error) {
        reject(error.message)
    }


})

myPromise.then((data) => {
    console.log(data);
}).catch((err) => console.log(err))
// .then(function (course) {
//     console.log(course);
//     return new Promise((resolve, reject) => {
//         resolve("hello tra")
//     })
// })
// .then(function (data) {
//     console.log(data);
//     return 2
// })
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (err) {
//     console.log(err)
// })
// .finally(() => {
//     console.log("gi cung chay");
// })

// neu xac dinh promise tra ve resolve hoac reject


Promise.reject("minh chau").catch((data) => { console.log(data); });





const fecthPromise = async () => {

    try {
        let res = await myPromise
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

fecthPromise()

// sync và async

// đồng bộ và bất đồng bộ


// js là một ngôn ngữ đồng bộ nhưng nó có thể xử lý ngôn ngữ bất đồng bộ


setTimeout(() => {
    console.log("1")
}, 2000);

console.log("2")


// console.log(myPromise);



const laydulieu = async () => {
    let result = await myPromise
    // console.log(result);
    return result
}

laydulieu().then((data) => {
    console.log(data);
});




//async vs await
// async : promise
// await : chờ 



console.log();



// bài 1:

const caculator = (a, b, myCallBackResult) => {
    let result = {
        tong: a + b,
        hieu: a - b,
        tich: a * b,
        thuong: a / b
    }
    myCallBackResult(result)
}

const myCallBackResult = (result) => {
    console.log("tong: ", result.tong);
    console.log("hieu: ", result.hieu);
    console.log("tich: ", result.tich);
    console.log("thuong: ", result.thuong);
}


caculator(4, 5, myCallBackResult)



// Math.PI

console.log(Math.PI);

// Math.round()

console.log(Math.round(1.5));

//Math.abs()
console.log(Math.abs(5));

//Math.ceil

console.log(Math.ceil(1.1));

//Math.floor

console.log(Math.floor(1.8));

//Math.random()

console.log(Math.random());

console.log(Math.ceil(Math.random() * 10));

// Math.min()

console.log(Math.max(3, 32, 1, 5));



//Math.Pi

console.log(Math.PI);

//Math.round()

console.log(Math.round(1.5));

//Math.abs()

console.log(Math.abs(-4));

// 

console.log(Math.ceil(1.1));
console.log(Math.floor(1.9));

// Math.random()

console.log(Math.ceil(Math.random() * 10));

// Math.min()

console.log(Math.max(3, 4, 2, 1, 8));

//Làm quen callback function // invoker

// function printName(myNameCallBack) { // parameter
//    myNameCallBack("minh chau")
// }

const printName = (myNameCallBack) => {
    myNameCallBack("minh chau")
}


const myNameCallBack = (name) => {
    console.log(name);
}



printName(myNameCallBack) // lúc gọi lại hàm : argument







// json : là một định dạng dữ liệu dạng chuỗi(string, object, number ...)

let obj = { name: "minh chau", age: 26 }

// console.log(JSON.stringify(obj));

let json = JSON.stringify(obj)

// JSON.stringify : javascript -> json
// JSON.parse() : jsion -> javascript

console.log(JSON.parse(json));



'{"name": "minhChau"}'



console.log(json);
// javascript là ngôn ngữ đồng bộ nhưng nó xử lý được bất đồng bộ

// sync : đồng bộ

console.log(1);
console.log(2);

// async: bất đồng bộ


setTimeout(() => {
    console.log(1);
}, 3000);

console.log(2);


// include

const arrayInclude = [2, "mi", 3, 5, 7]

console.log(arrayInclude.includes("mav"));



// Bài 1: viết một function truyền vào hai tham số tính và in ra tổng 
// tích thương.
// bằng 3 loại function.
// loại 1: declare function 

function loai1(a, b) {
    let sum = a + b;
    return sum
}

console.log(loai1(5, 10));

// loai 2: arrow fuction

const loai2 = (a, b) => {
    let nhan = a * b
    return nhan
}
console.log(loai2(2, 10));

// loai 3: express fuction

const loai3 = function (a, b) {
    let tich = a / b
    return tich
}
console.log(loai3(6, 3));


// viết một function có tên kiemTraSo cho vào 2 tham số a và b. 
// kiểm tra a lớn hơn b hoặc nhỏ hơn thì in ra.

const kiemTraSo = (a, b) => {
    if (a < b) {
        console.log(`${a} nho hon ${b}`);

    } else {
        console.log(`${a} lon hon ${b}`);
    }
}
kiemTraSo(5, 7)


function kiemTraSo2(a, b) {
    if (a > b) {
        console.log(`${a} lon hon ${b}`);
    } else {
        console.log`${a} nho hon ${b}`;
    }
}
kiemTraSo2()


// bài 3: viết một function truyền vào một array chứa các số nguyê
// tính tổn các số nguyên dó rồi in ra tổng.
let array = [2, 3, 4, 5, 6]
function tinhTong(myarray) {
    let sum = 0
    myarray.forEach(element => {
        sum = sum + element
    })
    console.log(sum);

} tinhTong(array)



let array4 = [3, 4, 5, 9]
function phepCong(array4) {
    sum = 0
    array4.forEach((element) => {
        sum += element
    })
    console.log(sum);
}

phepCong(array4)



//Bài 4: viết một function truyền vào một array object user.
// in ra tất cả các user

let array2 = [
    {
        name: "minh chau",
        age: 20,
        address: "quang ngai"
    },
    {
        name: "nguyen hung",
        age: 21,
        address: "da nang"
    },
    {
        name: "van nhan",
        age: 21,
        address: "quang nam"
    }
]
function showUser(myname) {
    myname.forEach(element => {
        console.log(`${element.name},${element.age},${element.address}`);
    })
}
showUser(array2)


// function

const showName = (myCallback) => {
    myCallback("minh chau")
}

const myCallback = (name) => {
    console.log(name);
}

showName(myCallback)

// 
const arrayTest = ["minh", "nguyet", "sinh", "son"]

arrayTest.filter((item, index) => {

})

setTimeout(() => {
    console.log("van nhan");
}, 3000);


// sync vs async: javascript là một ngôn ngữ đồng bộ nhưng
// nó thực hiện được bất đồng bộ

// sync : đồng bộ 

console.log(1);
console.log(2);
console.log(3);

// asyc : bất đồng bộ
// những tác vụ tốn thời gian thì sẽ được rẽ nhánh thực hiện 
// song song với các tác vụ động bộ chứ không chờ đợi tác vụ tốn
// thời gian chạy xong


setTimeout(() => {
    console.log(1);

}, 3000);
console.log(2);
console.log(3);


// call back hell

// promise 

let my2Promise = new Promise((resolve, reject) => {
    let data = [
        {
            name: "minh chau",
            age: 29
        },
        {
            name: "thanh ti",
            age: 20
        },
    ]

    try {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    } catch (error) {
        reject(error)
    }
})



my2Promise.then((data) => {
    console.log(data);
    return 2
})
    .then((data) => {
        console.log(data);
        return 3
    })
    .then((data) => {
        console.log(data);
        return 4
    })
    .catch((data) => {
        console.log(data);
    })
    .finally(() => {

    })

// fake call back hell

setTimeout(() => {
    console.log(2);
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
        }, 2000);
    }, 2000);
}, 2000);


// call back
// là một function và được truyền như một đối số và được sử dụng
// trong fuciton sài đối số đây

function myName(name, callback) {
    callback(name)
}

// function này được gọi là call back
function callback(name) {
    console.log(name);
}

myName("Tra Nguyen", callback)


setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 2000);
    }, 2000)
}, 2000);

// Promise


// myPromiseTwo
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("finally");
//     })

// Promise.resolve

// let newPromise = Promise.reject("thuc hien that bai")

// newPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// //'
let listUser = []

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
const myPromiseTwo = new Promise((resolve, reject) => {

    try {
        setTimeout(() => {

            resolve(user)
        }, 5000)

    } catch (error) {

    }

})

async function fetchApi() {
    let data = await myPromiseTwo
    console.log(data);

}
console.log(1);
console.log(2);
console.log(3);

fetchApi()



