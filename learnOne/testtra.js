// callback : là một function, được truyền như một tham số thông qua agument và được gọi lại trong hàm đã truyền.

const printName = (myCallback) => {
    myCallback("tra")
}

const myCallback = (name) => {
    console.log(name);
}

printName(myCallback)


// promise

let myPromise = new Promise((resolve, reject) => {
    try {
        let i = i / a
        setTimeout(() => {
            resolve({
                name: "tra",
                age: 20
            })
        }, 3000);
    } catch (error) {
        reject(error.message)
    }
})

const receiveData = async () => {
    try {
        let data = await myPromise
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}

receiveData()

myPromise
    .then((data) => {
        console.log("proccess success", data);
        return 2
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("process fail", error);
    })
    .finally((data) => {

    })


let newPromise = Promise.resolve("da thanh cong")

newPromise.then((data) => {
    console.log(data);
})



//Bài 3: Tính tổng Tiền lương của những người có năm sinh là số chẵn trong mảng sau:
const arrayEmployee = [
    {
        name: "Nguyen van a",
        birthday: 1975,
        salary: 2000
    },
    {
        name: "Nguyen van b",
        birthday: 1982,
        salary: 2002
    },
    {
        name: "Nguyen van c",
        birthday: 1974,
        salary: 2500
    },
    {
        name: "Nguyen van d",
        birthday: 1975,
        salary: 20020
    },
    {
        name: "Nguyen van e",
        birthday: 1975,
        salary: 5000
    },
]
// cach 2: dung cac method

let sumOne = arrayEmployee.filter(item => item.birthday % 2 === 0).map(item => item.salary).reduce((prev, current) => prev + current, 0)

console.log(sumOne);

// cach 1: dung vong for de lap ra cac phan tu chua nam sinh là so chan

let sum = 0
for (let i = 0; i < arrayEmployee.length; i++) {
    if (arrayEmployee[i].birthday % 2 === 0) {
        sum = sum + arrayEmployee[i].salary
    }
}


console.log(sum);

//Bài 4:  viết  function in ra bảng cửu chương từ 1-> 10.
// dinh nghia ham
const cuuchuong = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log("-----------------")
        for (let j = 1; j <= n; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
}
// thuc thi ham
cuuchuong(10)

//Bài 5: Viết function tìm ra số lớn nhất và số nhỏ nhất trong một mảng số tự nhiên cho trước ( dùng 2 cách dùng vòng for thông thường hoặc dùng Math.min và Math.max

// dinh nghia
const kiemTraSo = (array) =>{
    let max = array[0]
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
        if (min > array[i]) {
            min = array[i]
        }
    }
    return {
        max, min
    }
}

// thuc thi
let kq = kiemTraSo([23,35,78,2,4,0,17])
console.log(kq);

//Bài 6. Viết function chuyển đổi nhiệt độ C -> F và ngược lại.

function chuyenDoiDoCSangDoF(c) {
    let f = c * 9/5 + 32
    console.log("Do F: ",f,"deg");
}
chuyenDoiDoCSangDoF(5)

//Bài 7. Tìm số lớn thứ 2 trong mảng số tự nhiên.

const mang = [23,35,78,36,2,4,0,17]

mang.sort((a,b)=>b-a)

console.log(mang[1]);

//Bài 8.  Tính giai thừa của một số tự nhiên.

function tinhGiaiThua(number) {
    let tich = 1
    for(let i = 1; i<=number;i++){
        tich = tich* i
    }
    return tich
}

console.log(tinhGiaiThua(5));

// Bài 9: Viết  function đánh giá học sinh thuộc loại gì theo thang điểm 0->10 ( xuất sắc, giỏi, khá, trung bình , yếu)

function danhGia(diem) {
    switch (true) {
        case diem >= 9:
            return "gioi"
        case diem >= 6.5:
            return "kha"
        default:
            return "trung binh"
    }
}

console.log(danhGia(7));

//Bài 10: Sử dụng vòng lặp while để đếm số từ 1-> 10.
let i = 0
while (i < 10) {
    console.log(i);
    i++
}

//Bài 11: lọc const mixedArray = [10, "apple", 20, "banana", 30, "cherry", 40, "date"] ra hai mảng, một chứa string, một chứa số.

const mixedArray = [10, "apple", 20, "banana", 30, "cherry", 40, "date"]

let stringArray = mixedArray.filter(item => typeof item === "string")
console.log(stringArray);
let numberArray = mixedArray.filter(item => typeof item === "number")
console.log(numberArray);