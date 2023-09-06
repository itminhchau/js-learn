
// console.log("print result");

// // comment line ctrl+ /
// /* comment line alt + shift + a */

// // variable

//  const a = "cuong" // hằng số  không thay đổi được




// var b = 10
// {
//    var b = 20 
// }


// console.log("log a: ", b);



// // sự khác nhau của const  , let , var

// // const: khai bao một biến hằng 

// const hang = 5;

// console.log("bien hang", hang);

// // let : biến khai báo trong phạm vi block

// let so = 5
//  so = 6
//  console.log("in so", so);


// var sovar = 5
//  sovar = 6
//  console.log("in so", sovar);



//  // sự khác nhau let và var

//  let numberOne = 2

//  {
//     let numberOne = 10

//  }

//  console.log("number", numberOne);


//  // booi den : c1 : ctr+ D , ctrl+ shift + L
//  // global
//  var numberTwo = 2

//  {
//     var numberTwo = 10
//  }

//  console.log("number", numberTwo);

//  // in ra bao nhieeu

//  // cuong : 10
//  // tra : 10

//  var name = " cuong"
//  var name = "tra"

//  console.log("name", name);


//  let name2 = " cuong"
//      name2 = "tra"

// variable : const , var ,let 
// const : hằng ( không thể gán lại giá trị khi đã được khởi tạo)
// var : biến global ( có thể gán lại gái trị và có thể khai báo lặp lại)
// let : biến phạm  ( có thể gán lại giá trị và không thể khai báo lặp lại)

// toán tử ( operator)
// + - * / % **

// let a = 5
// let b = 10
// let c = a - b


// toán tử gán 
// =
// +=
// -=
// *=
// /=
// %=
// // **=

//  let a = 5
//  let b = 10

//  let c  = b
//    c += b;

//  console.log("result: ", c);



// toán tử so sánh

/* ==, >= , <=  (===) ,!=*/
// let a = 10
// let b = "5x"

// if (a >= b) {
//     console.log("hai số bằng nhau");
// }else{
//     console.log("hai số không bằng nhau");
// }


// sự khác nhau giữa == ===

// == so sanh value
// === so sanh cả giá trị, cả kiểu dữ liệu, cả vị trí lưu trong ô nhớ 
// let a = 10
// let b = "10"

// if (a != b){
//     console.log ("hai số bằng nhau")
// }else {
//     console.log ( " hai số không bằng nhau")
// }


// toán tử chuỗi 
// + - chuỗi
// - * / sẽ convert( chuyển ) chuỗi qua number (số) rồi thực hiện phép tính;

let str = "nhan50" - 20
console.log("in ra ket qua:", str)

// NaN : not a number (nó không phải là một số)







// type value
/* 
1. Number (số)
2. string (chuỗi)
3. boolean (true, false)
4. undefined (biến chưa khởi tạo giá trị)
5. null (rỗng)
6. object 
7. symbool // hầu như khồng dùng
8. array

*/

let a = 10;
let b = " 50"
let c = true
let d = false

let e



let h = null
console.log("result", h);
// key và value

let obj = {
  firstName: "nguyen van",
  name: "nhan",
  age: "21",
  address: "quang nam"
}
// c1: 
//console.log(" in", obj.firstName);

// c2: 

console.log("in", obj["firstName"]);


console.log("se ra ket qua", obj.firstName + " " + obj.name + " " + obj.age + "-" + obj.address);


// array

// let array =["nhan",21, " ",{address:"quang nam", firstName:"nguyen van", class:"fontend", teacher:"TienIT"}]
// console.log("ket qua la:", array[0]+array[2]+array[3].address);

let arrayOne = [1, "chuoi", { name: "chau" }, () => { }]

console.log(arrayOne[1]);




// bài 8: 

// cách 1:
const student = [
  { name: "minh chau", age: 20 },
  { name: "minh hoa", age: 21 },
  { name: "minh van", age: 22 },
  { name: "minh kinh", age: 10 },
]

const sortAge = (array, minAge) => {
  const filterAge = array.filter(item => item.age >= minAge)
  const sortAge = filterAge.sort((a, b) => b.age - a.age)
  return sortAge
}

console.log(sortAge(student, 20));

// cách 2:
const student2 = [
  { name: "minh chau", age: 20 },
  { name: "minh hoa", age: 21 },
  { name: "minh van", age: 22 },
  { name: "minh kinh", age: 10 },
]

const sortAge2 = (array, minAge) => {
  let newFilterArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index].age;
    if (element >= minAge) {
      newFilterArray.push(array[index])
    }

  }
  let temp = {}
  for (let i = 0; i < newFilterArray.length - 1; i++) {
    for (let j = 1; j < newFilterArray.length; j++) {
      if (newFilterArray[i].age < newFilterArray[j].age) {
        temp = newFilterArray[i]
        newFilterArray[i] = newFilterArray[j]
        newFilterArray[j] = temp
      }

    }
  }
  return newFilterArray
}

console.log(sortAge2(student2, 20));


// Bài 9:

const students = [
  { name: "John", scores: [80, 90, 70] },
  { name: "Emily", scores: [95, 85, 90] },
  { name: "David", scores: [75, 80, 85] },
  { name: "Sarah", scores: [90, 92, 88] }
];

const calculateAverageScore = student => {
  const sum = student.scores.reduce((total, score) => total + score, 0);
  const average = sum / student.scores.length;
  return average;
};

const sortByAverageScore = arr => {
  arr.sort((a, b) => calculateAverageScore(b) - calculateAverageScore(a));
};

sortByAverageScore(students);
console.log(students);





/*bài 2: Tính số lần xuất hiện của mỗi từ trong một câu:
Viết một hàm nhận vào một câu và trả về một đối tượng đếm số lần xuất hiện của mỗi từ trong câu. Ví dụ: với câu "This is a test. This is only a test.", kết quả sẽ là { "This": 2, "is": 2, "a": 2, "test": 2, "only": 1 }. */


function countWordOccurrences(sentence) {
  const words = sentence.toLowerCase().match(/\b\w+\b/g); // Tách câu thành danh sách các từ

  const wordCount = {};

  words.forEach(word => {
    if (word in wordCount) {
      wordCount[word]++; // Tăng số lần xuất hiện của từ nếu đã tồn tại trong đối tượng
    } else {
      wordCount[word] = 1; // Thêm từ mới vào đối tượng với số lần xuất hiện là 1
    }
  });

  return wordCount;
}

// Ví dụ sử dụng
const sentence = 'This is a test. This is only a test.';
const wordOccurrences = countWordOccurrences(sentence);
console.log(wordOccurrences);


/* bài 1: 
Tìm chuỗi con dài nhất không lặp lại trong một chuỗi:
Viết một hàm nhận vào một chuỗi và trả về độ dài của chuỗi con dài nhất mà không có ký tự nào lặp lại. Ví dụ: với chuỗi "abcabcbb", kết quả sẽ là 3 ("abc").
 
*/

function findLongestSubstring(str) {
  let longestSubstring = '';
  let currentSubstring = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charIndex = currentSubstring.indexOf(char);

    if (charIndex === -1) {
      currentSubstring += char;
    } else {
      if (currentSubstring.length > longestSubstring.length) {
        longestSubstring = currentSubstring;
      }
      currentSubstring = currentSubstring.slice(charIndex + 1) + char;
    }
  }

  // Kiểm tra xem chuỗi con cuối cùng có dài hơn không
  if (currentSubstring.length > longestSubstring.length) {
    longestSubstring = currentSubstring;
  }

  return longestSubstring.length;
}

// Ví dụ sử dụng
const inputString = 'abcabcbb';
const longestLength = findLongestSubstring(inputString);
console.log(longestLength); // Kết quả: 3

const chuoi = "minh"
console.log(chuoi[0]);

function capitalizeFirstLetter(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    console.log("check", words[i].substring(1));
    words[i] = firstLetter + words[i].substring(1);
  }

  return words.join(' ');
}

console.log(capitalizeFirstLetter('hello world'));




